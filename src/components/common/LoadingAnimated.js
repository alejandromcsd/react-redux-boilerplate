/**
Component in charge of displaying a loading element to the user (when required).
Using stateless component for this one.
*/

import React from 'react';
import './LoadingAnimated.scss';

function LoadingAnimated() {
    return (
        <div className="loading" />
    );
}

export default LoadingAnimated;