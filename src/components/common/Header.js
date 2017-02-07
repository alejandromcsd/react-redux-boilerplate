/**
Component in charge of rendering a simple menu. Also in charge of propagate
loading status down to the LoadingAnimated component. Using stateless component 
for this one.
*/

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingAnimated from './LoadingAnimated';

function Header ({loading}) {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/widget" activeClassName="active">See widget</Link>    
            {loading && <LoadingAnimated />}                        
        </nav>
    );
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;