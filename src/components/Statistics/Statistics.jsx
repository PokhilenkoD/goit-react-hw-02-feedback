import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  goodsFeedback,
}) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive feedback:{goodsFeedback ? goodsFeedback : 0}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  goodsFeedback: PropTypes.func.isRequired,
};
