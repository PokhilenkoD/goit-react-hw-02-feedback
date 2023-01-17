import { SectionTitle } from 'components/SectionTitile/SectionTitle';
import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
    subTitle: 'Statistics',
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
    const { title, subTitle } = this.props;
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const goodsFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <SectionTitle
          title={title}
          countFeedback={this.countFeedback}
          subTitle={subTitle}
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          goodsFeedback={goodsFeedback}
        />
      </div>
    );
  }
}
