import React, { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import Select from "react-select";
const Style = styled(Select)`
    background: #ffff;
    width: ${(props) => props.width};
`;

const FormSelect = ({
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [isValid, setValid] = useState(false);
    const [selectedOption, setSelected] = useState(item.option[0]);
    const handleChange = (results) => {
        setSelected(results);
        if (item.isMulti) {
            _onGetValue(results);
        } else {
            _onGetValue(results.value);
        }
        // checkValid(results);
    };
    const _onGetValue = (results) => {
        let valueResult = results;
        onGetValue({
            id: id,
            name: item.name,
            value: valueResult,
            status: valueResult === "" ? false : true,
        });
        setValid(!item.status);
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
                width={item.width}
                placeholder={item.placeholder}
                name={item.name}
                id={item.name}
                onChange={(e) => handleChange(e)}
                readOnly={item.readOnly !== undefined ? false : item.readOnly}
                rows={item.rows}
                defaultValue={value}
                type={item.type}
                value={selectedOption}
                classNamePrefix={className}
                options={item.option}
                isMulti={item.isMulti}
                closeMenuOnSelect={item.isMulti ? false : true}
            >
                {/* <option value="0">{item.placeholder}</option>
                {item.option.map((list, key) => {
                    return (
                        <option key={key} value={list.value}>
                            {list.name}
                        </option>
                    );
                })} */}
            </Style>
            {isValid ? (
                <small className="text-danger">
                    <i>{item.valid}</i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormSelect;
