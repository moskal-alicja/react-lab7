import React from 'react'

function Employee(props) {
    const colorStyle = props.active ? "green" : "red";
    return(
        <div style={{color: colorStyle}}>
            {props.name} {props.age}
        </div>       
    );
}

export default Employee