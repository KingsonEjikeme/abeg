import React from 'react'
import "./PageHeading.css"

const PageHeading = ({headingText}) => {
  return (
    <div className="page-heading">
        <div className="page-heading-container">
            {headingText}
        </div>
    </div>
  )
}

export default PageHeading