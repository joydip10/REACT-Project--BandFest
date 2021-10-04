import React from 'react';
import "./Members.css";

const Members = (props) => {
    const {name,image}=props.item;
    return (
        <div className="member-design">
            <img src={image} alt="" />
            <h6>{name}</h6>  
            <i class="far fa-times-circle" onClick={props.handleCross}></i>       
        </div>
    );
};

export default Members;