import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export const SectionTitle = ({
  title,
  countFeedback,
  subTitle,
  good,
  neutral,
  bad,
  totalFeedback,
  goodsFeedback,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <FeedbackOptions countFeedback={countFeedback} />
      <h2>{subTitle}</h2>
      {totalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          goodsFeedback={goodsFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
