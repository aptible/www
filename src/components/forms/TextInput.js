import React from 'react';
import styles from './TextInput.module.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      value: this.props.value,
    };
  }

  setFocus = focus => {
    this.setState({ focus: focus });
  };

  valueChange = e => {
    this.setState({ value: e.target.value });

    if (this.props.changeFn) {
      this.props.changeFn(e.target.value);
    }
  };

  showOutsideLabel = () => {
    return (
      this.state.focus || (this.state.value && this.state.value.length > 0)
    );
  };

  showPlaceholder = () => {
    return !this.showOutsideLabel();
  };

  render() {
    return (
      <div className={styles.container}>
        <label
          className={`${styles.label} ${
            this.showOutsideLabel() ? styles.focused : ''
          }`}
        >
          {this.props.labelText}
          {this.props.required && <span className={styles.required}>*</span>}
        </label>

        {this.showPlaceholder() && (
          <div className={styles.placeholder}>
            {this.props.labelText}
            {this.props.required && <span className={styles.required}>*</span>}
          </div>
        )}

        <input
          type="text"
          className={styles.input}
          value={this.state.value}
          onChange={this.valueChange}
          onFocus={() => this.setFocus(true)}
          onBlur={() => this.setFocus(false)}
        />
      </div>
    );
  }
}

export default TextInput;
