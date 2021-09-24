import React from 'react';
import "./MyStyles.css";

const MainHeading = (props) => {
    return (
        <div>
            <h1 className="Heading">{props.head}</h1>
        </div>
    )
}

export default MainHeading;