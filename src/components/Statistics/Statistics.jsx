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
