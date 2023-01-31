import PropTypes from 'prop-types';

export const FeedbackOptions = ({ countFeedback, options }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={countFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  countFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
