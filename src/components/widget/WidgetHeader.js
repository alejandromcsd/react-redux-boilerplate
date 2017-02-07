/**
Presentation component in charge of rendering the panel header, including the main product title.
Lets use a simple stateless component.
*/

import React, {PropTypes} from 'react';

function WidgetHeader({targetClass, productTitle, onToggle}) {
    return (
        <div className="widget-header">
            <h1 onClick={onToggle} className={`header header-${targetClass}`}>{productTitle}</h1>
            <span className={`glyphicon glyphicon-collapse-${targetClass}`} />
        </div>
    );
}

WidgetHeader.propTypes = {
    targetClass: PropTypes.string.isRequired,
    productTitle: PropTypes.string,
    onToggle: PropTypes.func.isRequired
};

export default WidgetHeader;