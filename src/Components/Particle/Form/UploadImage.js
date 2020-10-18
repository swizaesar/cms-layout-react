import React, { useState, useRef, useEffect } from "react";
import { ImageUploadStyle } from "./index.style";
import { FormGroup } from "reactstrap";

// import ImageDummy from "../../Assets/Dummy/dummy.jpg";

const ImageUpload = ({ validateForm, item, isStatus, id, onGetValue }) => {
    // const {
    //     id,
    //     name,
    //     setDataImage,
    //     // onGetValue,
    //     defaultValue = false,
    //     normalData = false,
    // } = props;
    const [isValid, setValid] = useState(false);
    // const [errorInput, setValueText] = useState(true);
    const [image, setImage] = useState("");
    const inputFileRef = useRef(null);
    const handleClickImage = () => {
        inputFileRef.current.click();
    };

    // useEffect(() => {
    //     if (defaultValue) {
    //         setImage(defaultValue);
    //     }
    // }, [defaultValue]);
    const handleOnChangeImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        // let error = false;
        let value = "";
        if (item.normalData) {
            value = file;
        } else {
            value = await toBase64(file);
        }

        // error = value ? true : false;
        setImage(URL.createObjectURL(file));
        // setValueText(error);;
        onGetValue({
            id: id,
            name: item.name,
            value: value,
            status:
                value === null || value === undefined || value === ""
                    ? false
                    : true,
        });
        setValid(!item.status);
    };
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
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
        <ImageUploadStyle height={item.heightStyle}>
            <FormGroup>
                <input
                    id={item.name}
                    name={item.name}
                    ref={inputFileRef}
                    onChange={handleOnChangeImage}
                    type="file"
                />
                <div className="image" onClick={handleClickImage}>
                    {image && <img src={image} alt="" />}

                    <div className="label-title">
                        <span>{item.placeholder}</span>
                    </div>
                </div>
                {/* <div className="desc">
                Gambar (opsional) - Format jpeg/png, ukuran 2:3, max size 2:5mb
            </div> */}
                {isValid ? (
                    <small className="text-danger">
                        <i>{item.valid}</i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </ImageUploadStyle>
    );
};

export default ImageUpload;
