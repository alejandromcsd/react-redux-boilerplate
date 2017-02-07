/**
Presentation component in charge of rendering the footer buttons. Again, we don't need state and
we make sure to call functions from parent component to iterate through the content
elements
*/

import React, {PropTypes} from 'react';

function WidgetFooter({nextTitle, onPrevious, onNext}) {
    return (
        <div className="widget-footer">
            <div className="previous pull-left" onClick={onPrevious}>
                <span className="glyphicon glyphicon-triangle-left" />
                <span className="action">Prev</span>
            </div>
            <div className="next pull-right" onClick={onNext}>
                <span className="action">{nextTitle}</span>
                <span className="glyphicon glyphicon-triangle-right" />
            </div>
        </div>
    );
}

WidgetFooter.propTypes = {
    nextTitle: PropTypes.string.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
};

export default WidgetFooter;