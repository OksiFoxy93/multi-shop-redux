import React from 'react';
import PropTypes from 'prop-types';

import "./Notification.scss";

const Notification = ({ text }) => {
    return (
        <div className="notification-wrapper">
            <p>{ text }</p>
        </div>
    );
};

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Notification;
