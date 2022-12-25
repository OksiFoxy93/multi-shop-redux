import "./Input.scss";
import classnames from "classnames";

const Input = ({ type, name, label, onChange, value, onBlur, error, placeholder }) => {
    return (
        <>
            <label className="label-input-wrapper">
                <span className="label">{ label }</span>
                <input
                    className={ classnames("input", {error: error}) }
                    type={ type }
                    name={ name }
                    value={ value }
                    placeholder={ placeholder }
                    onBlur={ onBlur }
                    onChange={ onChange }
                />
                <span className="validation-error-message">{ error }</span>
            </label>
        </>
    )
}

export default Input;
