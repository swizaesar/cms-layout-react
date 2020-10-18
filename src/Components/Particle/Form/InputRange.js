import React, { useState } from "react";
import InputRange from "react-input-range";
import CurrencyInput from "react-currency-input";
import "react-input-range/lib/css/index.css";
import { FormGroup, Col, Row } from "reactstrap";
// import "./style.css";
const InputRangeMultiple = ({
    maxValue,
    minValue,
    item,
    id,
    onGetValue = () => {},
    validateForm,
}) => {
    const [valueMulti, setValueMulti] = useState({
        min: item.minValue,
        max: item.maxValue,
    });
    const [validInput, setValidInput] = useState(false);
    const [amountMin, setAmountMin] = useState(item.minValue);
    const [amountMax, setAmountMax] = useState(item.maxValue);
    const [valueRange, setValueRange] = useState(item.maxValue);
    const handlerGetValue = (value) => {
        if (item.isMulti) {
            setValueMulti(value);
            setAmountMin(value.min);
            setAmountMax(value.max);
        } else {
            setValueRange(value);
        }

        onGetValue({
            id: id,
            name: item.name,
            value: value,
            status: true,
        });
    };
    const handleValueMin = (e, resultValue, valueFloat) => {
        e.preventDefault();
        const value = valueFloat;
        setAmountMin(resultValue);
        setValueMulti({
            min: value,
            max: item.value.max,
        });
        onGetValue({
            id: id,
            name: item.name,
            value: {
                min: value,
                max: item.value.max,
            },
            status: true,
        });
    };
    const handleValueMax = (e, resultValue, valueFloat) => {
        e.preventDefault();
        const value = valueFloat;
        setAmountMax(resultValue);
        if (value < item.value.min) {
            setValidInput(true);
            setValueMulti({
                min: item.value.min,
                max: item.value.min,
            });
        } else {
            setValidInput(false);
            setValueMulti({
                min: item.value.min,
                max: value,
            });
        }
        onGetValue({
            id: id,
            name: item.name,
            value: {
                min: item.value.min,
                max: value,
            },
            status: true,
        });
    };
    return (
        <div>
            {item.haveInput && item.isMulti && (
                <FormGroup>
                    <Row>
                        <Col xl="6">
                            {item.labelMin && (
                                <label
                                    htmlFor={item.id}
                                    className={item.labelClass}
                                >
                                    {item.labelMin}
                                </label>
                            )}
                            <CurrencyInput
                                name={item.name}
                                value={amountMin}
                                className="form-control form-control-alternative"
                                onChangeEvent={handleValueMin}
                                precision={0}
                                decimalSeparator=","
                                thousandSeparator="."
                                prefix={item.prefix}
                            />
                        </Col>
                        <Col xl="6">
                            {item.labelMax && (
                                <label
                                    htmlFor={item.id}
                                    className={item.labelClass}
                                >
                                    {item.labelMax}
                                </label>
                            )}
                            <CurrencyInput
                                name={item.name}
                                value={amountMax}
                                className="form-control form-control-alternative"
                                onChangeEvent={handleValueMax}
                                precision={0}
                                decimalSeparator=","
                                thousandSeparator="."
                                prefix={item.prefix}
                            />
                            {validInput && (
                                <small className="text-danger">
                                    <i>Angka tidak boleh kurang dari minimal</i>
                                </small>
                            )}
                        </Col>
                    </Row>
                </FormGroup>
            )}
            {item.haveRange && (
                <div className="mb-5 mt-4">
                    <FormGroup>
                        {item.isMulti ? (
                            <InputRange
                                formatLabel={(value) =>
                                    item.formatLabel ||
                                    item.formatLabel === undefined
                                        ? `${value} ${item.formatLabel}`
                                        : value
                                }
                                draggableTrack
                                maxValue={item.maxValue}
                                minValue={item.minValue}
                                onChange={(value) => handlerGetValue(value)}
                                onChangeComplete={(value) =>
                                    console.log("onChangeComplete", value)
                                }
                                value={valueMulti}
                            />
                        ) : (
                            <InputRange
                                formatLabel={(value) =>
                                    item.formatLabel ||
                                    item.formatLabel === undefined
                                        ? `${value} ${item.formatLabel}`
                                        : value
                                }
                                draggableTrack
                                maxValue={item.maxValue}
                                minValue={item.minValue}
                                onChange={(value) => handlerGetValue(value)}
                                onChangeComplete={(value) =>
                                    console.log("onChangeComplete", value)
                                }
                                value={valueRange}
                            />
                        )}
                    </FormGroup>
                </div>
            )}
        </div>
    );
};
export default InputRangeMultiple;
