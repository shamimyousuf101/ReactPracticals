import React from 'react'
import PropTypes from 'prop-types'
import './formtitle.css'

const FormTitle = ({children}) => {
    return(<h2 className="NewPromotionTitle">{children}</h2>)
}


FormTitle.propTypes = {
    children: PropTypes.string
}


export default FormTitle;