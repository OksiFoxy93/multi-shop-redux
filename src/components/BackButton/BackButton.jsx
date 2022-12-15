import { useNavigate } from "react-router-dom";

import "./BackButton.scss"
import { ReactComponent as ArrowBack } from "../../icons/left-arrow-back.svg";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={ () => navigate(-1) } className="back-button">
            <ArrowBack className="arrow-icon" /> <span>Back</span>
        </button>
    )
}

export default BackButton;
