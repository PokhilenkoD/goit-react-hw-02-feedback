import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};
