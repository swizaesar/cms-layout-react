import React, { Fragment } from "react";
import FormValidation from "./FormValidation";
import { Row } from "reactstrap";

const Form = ({
    form = [],
    // validationClick,
    handlerStatusForm = () => {},
    validateForm = true,
    setForm = () => {},
}) => {
    const onGetValue = (param) => {
        // let isError = false;
        form[param.id].value = param.value;
        form[param.id].status = param.status;
        // for (let key in form) {
        //     if (!form[key].status) {
        //         isError = true;
        //     }
        // }
        setForm(form);
    };
    return (
        <Fragment>
            <Row>
                {form.map((item, key) => {
                    return (
                        <FormValidation
                            onGetValue={onGetValue}
                            validateForm={validateForm}
                            handlerStatusForm={handlerStatusForm}
                            isStatus={!form[key].status}
                            form={form}
                            item={item}
                            key={key}
                            id={key}
                        />
                    );
                })}
            </Row>
        </Fragment>
    );
};
export default Form;
