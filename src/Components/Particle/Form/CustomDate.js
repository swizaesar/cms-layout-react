import React from "react";

const CustomDate = ({ value, onClick }) => (
    <button className="form-control w-100" onClick={onClick}>
        {value} <i className="far fa-calendar ml-4"></i>
    </button>
);
export default CustomDate;
