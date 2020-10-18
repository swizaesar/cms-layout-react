import React, { useRef, useState, useEffect, useCallback } from "react";
// import Button from "../Button";
import styled from "styled-components";
import { FormGroup, Input, Button } from "reactstrap";

const Style = styled(FormGroup)`
    button {
        position: absolute;
        top: 1px;
        border-radius: 0 0.25rem 0.25rem 0;
        right: 15px;
        padding: 5px 20px;
        &:hover {
            transform: translateY(0px);
        }
    }
`;

const UploadFile = ({ validateForm, item, isStatus, id, onGetValue }) => {
    const inputFileRef = useRef(null);
    const [isValid, setValid] = useState(false);
    const [fileName, setFileName] = useState("");
    const handlerUploadFile = (e) => {
        let value = e.target.files[0];
        setFileName(value.name);
        onGetValue({
            id: id,
            name: e.target.name,
            value: value.name,
            status: value.name === "" ? false : true,
        });
        setValid(!item.status);
    };
    const handlerUploadClick = () => {
        inputFileRef.current.click();
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <Style>
            <FormGroup>
                {item.label && (
                    <label htmlFor={item.id} className={item.labelClass}>
                        {item.label}
                    </label>
                )}
                <input
                    name={item.name}
                    id={item.name}
                    ref={inputFileRef}
                    type="file"
                    className="d-none"
                    onChange={(e) => handlerUploadFile(e)}
                />
                <Input
                    name={item.name}
                    value={fileName}
                    readOnly
                    placeholder={item.placeholder}
                />
                <Button type="button" onClick={handlerUploadClick}>
                    Upload
                </Button>
                {isValid ? (
                    <small className="text-danger">
                        <i>{item.valid}</i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </Style>
    );
};
export default UploadFile;
