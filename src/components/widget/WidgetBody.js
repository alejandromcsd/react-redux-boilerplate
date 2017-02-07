/**
Presentation component in charge of rendering the content items. Also a simple one, lets use a stateless
component.
*/

import React, {PropTypes} from 'react';

function WidgetBody({content}) {
    //This function could be relocated to a utils library, but should be enough
    //for boilerplate
    const breakLine = (text) => {
        const regex = /(<br \/>)/g;
        return text.split(regex).map((line, index) => {
            return line.match(regex) ? <br key={index}/> : line;
        });
    };

    return (
        <div className="widget-body row">
            <div className="col-sm-3">
                <img className="img-responsive" src={content.thumbnail ? `/data/${content.thumbnail}` : null}/>
            </div>
            <div className={content.thumbnail ? "col-sm-9" : "col-sm-12"}>
                <h5>{breakLine(content.description)}</h5>
            </div>
        </div>
    );
}

WidgetBody.propTypes = {
    content: PropTypes.object.isRequired
};

export default WidgetBody;