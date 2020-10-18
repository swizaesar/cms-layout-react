/* eslint-disable */
import React, { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input";
import { CurrencyStyle } from "./index.style";
import { FormGroup } from "reactstrap";

const FormPrice = (props) => {
    const {
        id,
        defaultValue = 0,
        onGetValue = () => {},
        item,
        validateForm,
    } = props;
    const [amount, setAmount] = useState(
        item.defaultValue ? item.defaultValue : defaultValue
    );
    const [isValid, setValid] = useState(false);

    const [unFormatValue, setFormatValue] = useState(0);

    const handleChange = (e, resultValue, valueFloat) => {
        e.preventDefault();
        const value = valueFloat;
        if (item.min) {
            const error = value < item.min.price ? false : true;
            setValid(!error);
            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
            });
        }
        if (item.max) {
            const error = value > item.max.price ? false : true;
            setValid(!error);
            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
            });
        } else {
            const error = value ? true : false;
            setValid(!error);
            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
            });
        }
        setFormatValue(value);
    };
    useEffect(() => {
        if (!validateForm) {
            setValid(!item.status);
        }
    }, [validateForm]);
    return (
        <FormGroup>
            <CurrencyStyle>
                {item.label && <label>{item.label}</label>}
                <div className="currency-row">
                    <CurrencyInput
                        name={item.name}
                        value={amount}
                        className="form-control form-control-alternative"
                        onChangeEvent={handleChange}
                        precision={item.precision ? item.precision : 0}
                        decimalSeparator=","
                        thousandSeparator="."
                        suffix={item.suffix}
                        prefix={item.currencyLogo}
                    />
                </div>
                {isValid ? (
                    item.min && unFormatValue < item.min.price ? (
                        <small className="text-danger">
                            <i>{item.min.valid}</i>
                        </small>
                    ) : item.max && unFormatValue > item.max.price ? (
                        <small className="text-danger">
                            <i>{item.max.valid}</i>
                        </small>
                    ) : (
                        <small className="text-danger">
                            <i>{item.valid}</i>
                        </small>
                    )
                ) : (
                    false
                )}
            </CurrencyStyle>
        </FormGroup>
    );
};
export default FormPrice;
