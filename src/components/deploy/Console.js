import React from 'react';
import styles from './Console.module.css';

const KEYPRESS_DELAY_MS = 50;
const RESPONSE_DELAY_MS = 500;
const NEXT_INPUT_DELAY_MS = 500;

const datePieces = new Date().toISOString().split('T');
const today = datePieces[0];
const time = datePieces[1].slice(0, 8);

const commands = [
  {
    command:
      'aptible apps:create healthco-api --environment healthco-production',
    response: ['App healthco-api-nodejs created!'],
  },
  {
    command:
      'aptible deploy --app healthco-api --docker-image healthco/nodejs-api',
    response: [
      'INFO -- : Deploying with git commit: 809ab948298cf038f5080ada37d364dc36a',
      'INFO -- : Building app image from Dockerfile...',
    ],
  },
  {
    command: 'aptible db:create healthco-postgres --size 1000',
    response: [
      'INFO -- : Provisioning postgresql database...',
      'INFO -- : Database provision successful.',
      'INFO -- : Connection URL: postgresql://user:JhyudhsjfkLijfkje83A94fvh@db.aptible.in:27542/db',
    ],
  },
  {
    command: 'aptible logs --app healthco-api',
    response: [
      `${today} [healthco-api] "GET /healthcheck HTTP/1.0" 301 - 0.0021`,
      `${today} [healthco-api] Started GET "/healthcheck" for 10.0.0.150 at ${today} ${time} +0000`,
      `${today} [healthco-api] Completed 200 OK in 113ms`,
    ],
  },
];

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      nextCommand: 0,
      clicked: { close: false, minimize: false, expand: false }
    };
  }

  componentDidMount() {
    this.startTyping();
  }

  startTyping = () => {
    this.outputNextCommand();
  }

  outputNextCommand = () => {
    if (this.state.nextCommand > (commands.length - 1)) {
      return
    }

    let lines = this.state.lines;
    const nextCommand = commands[this.state.nextCommand];
    const typedCommand = this.typeCommand(nextCommand.command);
    const lineRef = React.createRef();

    // Render the next command to the screen
    lines.push(
      <div>
        <span className={styles.prompt}>$</span>
        <div className={styles.input} ref={lineRef}>{typedCommand.chars}</div>
      </div>
    );

    this.setState({ lines: lines });

    // Start the typing animation
    setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.className += ` ${styles.typed}`;
      }
    }, 100);

    // Render output & schedule next command
    if (nextCommand.response && nextCommand.response.length > 0) {
      setTimeout(() => {
        for (let line of nextCommand.response) {
          lines.push(<div className={styles.output}>{line}</div>);
        }
        this.setState({ lines: lines });
        this.scheduleNextCommand();
      }, RESPONSE_DELAY_MS + typedCommand.delay);
    } else {
      this.scheduleNextCommand();
    }
  }

  typeCommand = (command) => {
    const chars = command.split('');
    const response = {
      delay: chars.length * KEYPRESS_DELAY_MS
    };

    response.chars = chars.map((char, idx) => {
      return <span
              key={idx}
              className={styles.inputChar}
              style={{ transitionDelay: `${idx * KEYPRESS_DELAY_MS}ms`}}>
                {char}
              </span>
    });

    return response;
  }

  scheduleNextCommand = () => {
    this.setState({ nextCommand: this.state.nextCommand + 1 });

    setTimeout(() => {
      this.outputNextCommand();
    }, NEXT_INPUT_DELAY_MS);
  }

  clickButton = (button) => {
    const clicked = this.state.clicked;
    clicked[button] = true;
    this.setState({ clicked: clicked })
  }

  renderLines = () => {
    if (this.state.clicked.close && this.state.clicked.minimize && this.state.clicked.expand) {
      return <pre>{oswaldo}</pre>
    } else {
      return this.state.lines.map((line, idx) => {
        return <div key={idx} className={styles.line}>{line}</div>
      });
    }
  }

  render() {
    return (
      <div className={styles.console}>
        <div className={styles.taskbar}>
          <div className={`${styles.button} ${styles.close}`} onClick={() => this.clickButton('close')}></div>
          <div className={`${styles.button} ${styles.minimize}`} onClick={() => this.clickButton('minimize')}></div>
          <div className={`${styles.button} ${styles.expand}`} onClick={() => this.clickButton('expand')}></div>
        </div>
        <div className={styles.content}>
          {this.renderLines()}
        </div>
      </div>
    )
  }
}

export default Console;


const oswaldo = `
                            .---.         ,,
                 ,,        /     \\       ;,,'
                ;, ;      (  o  o )      ; ;
                  ;,';,,,  \\  \\/ /      ,; ;
               ,,,  ;,,,,;;,'   '-,;'''',,,'
              ;,, ;,, ,,,,   ,;  ,,,'';;,,;''';
                 ;,,,;    ~~'  '';,,''',,;''''  
                                    '''
                         _     _          __                              
                        | |   | |        / _|                             
  ___  _____      ____ _| | __| | ___   | |_ ___  _ __ _____   _____ _ __ 
 / _ \\/ __\\ \\ /\\ / / _' | |/ _' |/ _ \\  |  _/ _ \\| '__/ _ \\ \\ / / _ \\ '__|
| (_) \\__ \\\\ V  V / (_| | | (_| | (_) | | || (_) | | |  __/\\ V /  __/ |   
 \\___/|___/ \\_/\\_/ \\__,_|_|\\__,_|\\___/  |_| \\___/|_|  \\___| \\_/ \\___|_|   
`;
