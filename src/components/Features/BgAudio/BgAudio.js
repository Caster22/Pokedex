import React from 'react';
import styles from './BgAudio.module.scss';

class BgAudio extends React.Component {
  state = {
    play: false
  }
  audio = new Audio(this.props.url)

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div>
        <button className={styles.musicBtn} onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    );
  }
}

export default BgAudio;
