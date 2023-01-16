import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
    subtitle: 'Statistics',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = ev => {
    this.setState(prevState => {
      const value = Object.keys(this.state).find(
        state => state === ev.target.textContent.toLowerCase()
      );
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => {
      return acc + state;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { title, subtitle } = this.props;
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const goodsFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          <li>
            <button onClick={this.countFeedback}>Good</button>
          </li>
          <li>
            <button onClick={this.countFeedback}>Neutral</button>
          </li>
          <li>
            <button onClick={this.countFeedback}>Bad</button>
          </li>
        </ul>
        <h2>{subtitle}</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{totalFeedback}</li>
          <li>Positive feedback:{goodsFeedback ? goodsFeedback : 0}%</li>
        </ul>
      </div>
    );
  }
}
