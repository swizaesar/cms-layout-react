import styled from "styled-components";

export const ImageUploadStyle = styled.div`
    width: 100%;
    display: block;
    flex-direction: column;
    input {
        display: none;
    }
    .image {
        display: block;
        width: 100%;
        border: 1px solid #ddd;
        background: #fff;
        height: ${(props) => props.height || "160px"};
        position: relative;
        transition: all 0.7s ease-in;
        cursor: pointer;
        > img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .label-title {
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            justify-content: center;
            align-items: center;
            transition: all 0.2s ease-in;
            > span {
                opacity: 0.3;
                background: #d0d0d0;
                padding: 10px;
                font-size: 15px;
                font-weight: 500;
                transition: all 0.3s ease-in;
            }
        }
        &:hover {
            .label-title {
                background: rgba(214, 214, 214, 0.54);
                transition: all 0.3s ease-in;
                opacity: 0.8;
                > span {
                    opacity: 1;
                    transition: all 0.3s ease-in;
                }
            }
        }
    }

    .desc {
        width: 100%;
        display: block;
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
    }
    span.error {
        text-align: left;
        margin-bottom: 10px;
        color: #721c24;
        font-size: 13px;
        display: block;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        padding: 7px;
        border-radius: 4px;
    }
    .rs-uploader-file-item .rs-uploader-file-item-picture-text {
        padding-right: 0;
    }
    .rs-uploader-picture-text {
        &.rs-uploader-file-item {
            padding-right: 0;
        }
    }
`;
export const CurrencyStyle = styled.div`
    width: 100%;
    display: block;
    &:focus {
        outline: 1px solid #ffa300;
        transition: all 0.25s ease;
    }
    .currency-logo {
        position: absolute;
        left: 5px;
        top: 0;
        color: #575757;
        bottom: 0;
        font-size: 16px;
        padding: 7px 7px 7px 7px;
        color: #4a4a4a;
        font-weight: 500;
    }
    .currency-row {
        position: relative;
        display: flex;
        width: 100%;
    }
    input {
        width: 100%;
        display: block;

        background: #ffff;
        outline: none;
    }
    span.error {
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #721c24;
        font-size: 13px;
        display: block;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        padding: 7px;
        border-radius: 4px;
        display: flex;
        width: 100%;
    }
`;
