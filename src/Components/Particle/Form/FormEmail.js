import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

const Style = styled(Input)`
    background: #ffff;
`;

const FormEmail = ({
    isStatus,
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateEmail = () => {},
    validateForm = true,
}) => {
    const [isValue, setValue] = useState("");

    const [isValid, setValid] = useState(false);
    const _onGetValue = (e) => {
        let value = e.target.value;
        validateEmail(value);
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status: validateEmail(value) ? true : false,
        });
        setValid(!item.status);
        setValue(value);
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <FormGroup>
            {item.label && <label>{item.label}</label>}
            <Style
                name={item.name}
                id={item.name}
                onChange={(e) => _onGetValue(e)}
                readOnly={item.readOnly !== undefined ? false : item.readOnly}
                rows={item.rows}
                defaultValue={item.value}
                type={item.type}
                placeholder={item.placeholder}
                className={className}
            />
            {isValid ? (
                <small className="text-danger">
                    <i>
                        {isValue === ""
                            ? item.valid
                            : isValue !== "" && validateEmail(isValue)
                            ? false
                            : "Format email (Cth: asd@xxx.com)"}
                    </i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormEmail;
