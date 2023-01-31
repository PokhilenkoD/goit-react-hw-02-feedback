import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/SectionTitile/SectionTitle';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';
import { Notification } from 'components/Notification/Notification';

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
      const value = ev.target.textContent.toLowerCase();
      return {
        [value]: prevState[value] + 1,
      };
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
    const arrayOptions = Object.keys(this.state);

    return (
      <div>
        <SectionTitle title={title}>
          <FeedbackOptions
            options={arrayOptions}
            countFeedback={this.countFeedback}
          />
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              goodsFeedback={goodsFeedback}
              subTitle={subTitle}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
}
