import React from 'react';
import PropsTypes from 'prop-types';

import './banner.css';

const Banner = ({subHeading}) =>  (<header className="banner"><h1>Promotion Manager</h1><h3>{subHeading}</h3></header>);

Banner.propTypes = {
    subHeading: PropsTypes.string.isRequired
}

export default Banner;
