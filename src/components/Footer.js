import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({name,year,phone,isOpen,age}) => {
    return (
        <div>
            <h1>Footer : {name} :: {year} Age:: {age} Tel. {phone} Online : {isOpen.toString()}</h1>
        </div>
    )
}

Footer.propTypes ={
    name : PropTypes.string,
    year : PropTypes.number,
    age : PropTypes.number,
    phone : PropTypes.string,
    isOpen : PropTypes.bool
}

export default Footer
