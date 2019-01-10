import React from 'react'

import './FormTitle.css'

const FormTitle = (props) => {
    return(<h2 className="NewPromotionTitle">{props.children}</h2>)
}

export default FormTitle;