import classnames from "classnames";
import PropTypes from "prop-types";

import "./Button.scss"

const Button = ({ text, onClick, backgroundColor, textColorBtn, isDisabled }) => (
    <button
        className={ classnames("button", {disabled: isDisabled}) }
        onClick={ onClick }
        disabled={ isDisabled }
        style={ {backgroundColor: backgroundColor, color: textColorBtn} }>
        { text }
    </button>
)

export default Button;

Button.defaultProps = {
    isDisabled: false
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    textColorBtn: PropTypes.string,
    isDisabled: PropTypes.bool,
};
