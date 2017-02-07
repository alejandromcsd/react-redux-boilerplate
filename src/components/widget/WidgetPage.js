/**
This is the main container component. I've added all the communication with Redux in this
component. Once we get the data, we propagate it down to the presentation components.
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import WidgetHeader from './WidgetHeader';
import WidgetBody from './WidgetBody';
import WidgetFooter from './WidgetFooter';
import {browserHistory} from 'react-router';
import './WidgetPage.scss';

class WidgetPage extends React.Component {  
    constructor(props, context) {
        super(props, context);

        this.state = {
            content: Object.assign({}, props.content),
            index: 0,
            collapsed: false
        };
    }

    componentWillReceiveProps = (nextProps) => {
        //Ideally we would validate here with a unique attr (id?), but as json included
        //in this boilerplate doesn't provide ids for contents, 
        //this will do for boilerplate purpose
        if(this.props.content.title !== nextProps.content.title) {
            this.setState({content: Object.assign({}, nextProps.content)});
        }
    };

    getNextTitle = () => {
        //Lets get the title for the next content element
        const {content} = this.props.product;
        return content ? content[this.getNextIndex(content)].title : "";
    };

    onPrevious = () => {
        //Make sure we always have an item to render as "Previous"
        //This implementation could also be changed to hide the "Previous"
        //but this seems to be more logical to me
        const {content} = this.props.product;
        let index = this.state.index;

        index = index===0 ? index=content.length - 1 : index - 1;
        this.setState({
            content: Object.assign({}, content[index]),
            index
        });
    };

    onNext = () => {
        //Same as above, lets ensure we always have an element
        //to display when "Next" is clicked
        const {content} = this.props.product;
        const index = this.getNextIndex(content);
        this.setState({
            content: Object.assign({}, content[index]),
            index
        });
    };

    getNextIndex = (content) => {
        //A little bit of reusability here, as we need this 
        //to move next and also to get next title
        let index = this.state.index + 1;
        return index===content.length ? index=0 : index;
    };

    onToggleHeader = () => {
        //Using state for this specific use case, we want
        //to make sure react refreshes our div classes
        //every time the panel header is clicked
        this.setState({collapsed: !this.state.collapsed});
    };

    render() {
        const {product} = this.props;
        const targetClass = this.state.collapsed ? 'down' : 'up';

        //I've implemented this demo with three simple presentation components
        //(WidgetHeader, WidgetBody and WidgetFooter)
        return (
            <div className="widget">
                <WidgetHeader 
                    targetClass={targetClass} 
                    productTitle={product.title}
                    onToggle={this.onToggleHeader}
                />
                <div className={`panel panel-${targetClass}`}>
                    <WidgetBody content={this.state.content}/>
                    <WidgetFooter 
                        nextTitle={this.getNextTitle()} 
                        onPrevious={this.onPrevious}
                        onNext={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

WidgetPage.propTypes = {
    product: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function getDefaultContent(product) {
    //Always display first product content element, if available
    return product.content.length ? product.content[0] : null;
}

function mapStateToProps(state, ownProps) {
    //Redux will come this way, passing our data to the component 
    //after being processed by the reducers. 
    let content = {title:'', thumbnail:'', description:''};

    if(state.product && state.product.content)
        content = getDefaultContent(state.product);

    //I want to push the actual product, and a default content to 
    //the component props
    return {
        product: state.product,
        content: content
    };
}

function mapDispatchToProps(dispatch) {
    //Using bindActionCreators for convenience, as this is a simple
    //demo. But I could also dispatch directly the action(s) relative to this
    //component
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPage);