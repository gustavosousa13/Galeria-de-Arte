import PropTypes from 'prop-types';

const CustomArrowIcon = ({ direction = 'left', size = 30, strokeWidth = 1, ...props }) => {
  const transform = direction === 'left' ? 'rotate(0)' : 'rotate(180deg)';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color='Black'
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
      {...props}
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CustomArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.number,
  strokeWidth: PropTypes.number
};

export default CustomArrowIcon;
