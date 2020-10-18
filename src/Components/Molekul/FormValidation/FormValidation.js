/*eslint-disable*/
import React, { Fragment } from "react";
import { Col } from "reactstrap";
import renderType from "./renderType";

const FormValidation = ({
    onGetValue = () => {},
    item,
    isStatus,
    id,
    validateForm = true,
}) => {
    const checkVal = true;
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    // const onGetValue = (param) => {
    //     console.log("param", param);
    //     form[id].status = param.status;
    // };
    return (
        <Fragment>
            <Col xl={item.col}>
                {renderType({
                    id,
                    item,
                    checkVal,
                    isStatus,
                    onGetValue,
                    validateEmail,
                    validateForm,
                })[item.action](item.action)}
            </Col>
        </Fragment>
    );
};
export default FormValidation;
