import React from 'react';
import styles from './PricingSlider.module.css';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';

export function Handle({ handle: { id, percent }, getHandleProps }) {
  return (
    <div className={styles.handle} style={{ left: `${percent}%` }} {...getHandleProps(id)}></div>
  )
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      className={styles.track}
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}

function Tick({ tick, count, calculator, active }) {
  return (
    <div>
      <div
        className={`${styles.tick} ${tick.value === active ? styles.activeTick : ''}`}
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {(tick.value === active || calculator[tick.value]['alwaysDisplay']) && 
          calculator[tick.value].tick
        }

        {(tick.value !== active && !calculator[tick.value]['alwaysDisplay']) &&
          <div className={styles.blankTick}></div>
        }
      </div>
    </div>
  )
}

class PricingSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  valueChanged = (value) => {
    this.setState({ value: value[0] });

    if (this.props.updatePriceFn) {
      this.props.updatePriceFn(value[0]);
    }
  }

  render() {
    return (
      <Slider
        className={styles.slider}
        domain={[0, (this.props.calculator.length - 1)]}
        step={1}
        values={[this.state.value]}
        onUpdate={this.valueChanged}
      >
        <Rail>
          {({ getRailProps }) => (
            <div className={styles.rail} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div>
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div>
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks>
          {({ ticks }) => {
            return (
              <div>
                {ticks.map(tick => (
                  <Tick
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    calculator={this.props.calculator}
                    active={this.state.value} />
                ))}
              </div>
            )
          }}
        </Ticks>
      </Slider>
    )
  }
}

export default PricingSlider;
