import React, { useEffect, useState } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import styled from "styled-components";

const Style = styled(Input)`
    background: #ffff;
`;
const ButtonPassword = styled.button`
    position: absolute;
    right: 15px;
    height: max-content;
    top: ${(props) => (props.label === undefined ? "0px" : "unset")};
    bottom: ${(props) => (!props.label ? "16px" : "unset")};
    background: transparent;
    border: none;
    color: #6c6c6c;
    padding: 7px 10px;
`;

const FormRePassword = ({
    isStatus,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [showPassword, setShowPassword] = useState(true);
    const [showRePassword, setShowRePassword] = useState(true);
    const [isValue, setValue] = useState("");
    const [isReValue, setReValue] = useState("");
    const [isValid, setValid] = useState(false);
    const [isReValid, setReValid] = useState(false);
    const _onGetValue = (e) => {
        let value = e.target.value;
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status:
                value !== "" && isReValue !== "" && value === isReValue
                    ? true
                    : false,
        });

        setValid(item.value === "" ? true : false);
        setValue(value);
    };
    const _reOnGetValue = (e) => {
        let value = e.target.value;
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status:
                value !== "" && isValue !== "" && value === isValue
                    ? true
                    : false,
        });
        setReValid(!item.status);
        setValid(isValid);
        setReValue(value);
    };
    const handlerShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handlerShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(isValue === "" ? true : false);
            setReValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <Row>
            <Col xl="6" md="6" sm="6" xs="12">
                <FormGroup>
                    {item.label && (
                        <label style={{ color: "#c2c2c2" }}>{item.label}</label>
                    )}
                    <Style
                        label={item.label}
                        name={item.name}
                        id={item.name}
                        onChange={(e) => _onGetValue(e)}
                        readOnly={
                            item.readOnly !== undefined ? false : item.readOnly
                        }
                        defaultValue={isValue}
                        type={showPassword ? item.type : "text"}
                        placeholder={item.placeholder}
                        className={className}
                    />
                    <ButtonPassword onClick={handlerShowPassword} type="button">
                        <i
                            className={`fa ${
                                !showPassword ? "fa-eye" : "fa-eye-slash"
                            }`}
                        ></i>
                    </ButtonPassword>
                    {isValid ? (
                        <small className="text-danger">
                            <i>
                                {item.character === undefined
                                    ? item.valid
                                    : item.character.min.length > isValue.length
                                    ? item.character.min.valid
                                    : item.character.max.length < isValue.length
                                    ? item.character.max.valid
                                    : item.valid}
                            </i>
                        </small>
                    ) : (
                        false
                    )}
                </FormGroup>
            </Col>
            <Col xl="6" md="6" sm="6" xs="12">
                <FormGroup>
                    {item.label && (
                        <label style={{ color: "#c2c2c2" }}>{item.label}</label>
                    )}
                    <Style
                        label={item.label}
                        name={`re-${item.name}`}
                        id={`re-${item.name}`}
                        onChange={(e) => _reOnGetValue(e)}
                        readOnly={
                            item.readOnly !== undefined ? false : item.readOnly
                        }
                        defaultValue={isReValue}
                        type={showRePassword ? item.type : "text"}
                        placeholder={item.placeholder2}
                        className={className}
                    />
                    <ButtonPassword
                        onClick={handlerShowRePassword}
                        type="button"
                    >
                        <i
                            className={`fa ${
                                !showRePassword ? "fa-eye" : "fa-eye-slash"
                            }`}
                        ></i>
                    </ButtonPassword>
                    {isReValid ? (
                        <small className="text-danger">
                            <i>
                                {isValue !== isReValue
                                    ? "Konfirmasi password tidak sama"
                                    : item.valid2}
                            </i>
                        </small>
                    ) : (
                        false
                    )}
                </FormGroup>
            </Col>
        </Row>
    );
};
export default FormRePassword;
