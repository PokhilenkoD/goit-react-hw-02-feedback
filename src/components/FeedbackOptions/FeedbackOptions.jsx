import PropTypes from 'prop-types';

export const FeedbackOptions = ({ countFeedback }) => {
  return (
    <ul>
      <li>
        <button onClick={countFeedback}>Good</button>
      </li>
      <li>
        <button onClick={countFeedback}>Neutral</button>
      </li>
      <li>
        <button onClick={countFeedback}>Bad</button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = { countFeedback: PropTypes.func.isRequired };
