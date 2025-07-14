import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ children, size }) {
  return (
    <button
      className={classNames(
        'bg-[#EFF3F4] text-[#0f141a] text-lg font-bold w-[90%] h-[53px] rounded-full flex items-center justify-center hover:bg-[#d2d7d8] transition-colors cursor-pointer',
        {
          'px-4 h-9': size === 'normal',
          'px-4 h-13': size === 'large',
        }
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  size: 'normal',
};
