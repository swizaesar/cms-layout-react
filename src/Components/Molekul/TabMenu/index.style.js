import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .tab-top {
        width: 100%;
        display: flex;
        transition: 0.3 all ease-in;
        &-menu {
            display: flex;
            width: 100%;
            flex-direction: row;
            border: none;
        }
        &-title {
            position: relative;
            display: inline-flex;
            margin-right: 10px;
            padding: 10px 12px;
            transition: all 0.25s ease;
            color: ${(props) =>
                props.color.text ? props.color.text : "#b0b0b0"};
            background: #fff;
            font-weight: bold;
            /* border-bottom: 1px solid #fff; */
            cursor: pointer;
            /* border-bottom: none; */
            /* border-radius: 5px 5px 0 0; */
            &:hover,
            &.active {
                /* color: #4a4a4a; */
                font-weight: bold;
                color: ${(props) =>
                    props.color.activeText
                        ? props.color.activeText
                        : "#25aae2"};
                /* border-bottom: 3px solid
                    ${(props) =>
                    props.color.activeColor
                        ? props.color.activeColor
                        : "#25aae2"}; */
                transition: 0.3 all ease-in;
                background: ${(props) =>
                    props.color.activeBackground
                        ? props.color.activeBackground
                        : "#fff"};
            }
            &.radius {
                padding: 10px 25px;
                background: #f2f2f2;
                color: #989898;
                border-radius: 45px;
                transition: 0.3 all ease-in;
                border: 0;
                &.active,
                &:hover {
                    transition: 0.3 all ease-in;
                    background: #ffa300;
                    color: #fff;
                    border: 0;
                }
            }
            .border-active-link {
                position: absolute;
                left: 10px;
                right: 10px;
                bottom: 0;
                height: 4px;
                border-radius: 8px;
                background: transparent;
                opacity: 0;
                width: 0;
                -webkit-transition: all 0.3s ease-in;
                transition: all 0.3s ease-in;
                &.active {
                    opacity: 1;
                    width: calc(100% - 20px);
                    -webkit-transition: all 0.25s ease-in;
                    transition: all 0.3s ease-in;
                    background: ${(props) => props.color.activeColor};
                }
            }
            @media (max-width: 422px) {
                padding: 10px 10px !important;
            }
        }
    }
    .tab-content {
        padding: 20px 0;
    }
    .tab-top {
        &-menu {
            width: ${(props) => props.mergesTab && "max-content"};
        }
        &-title {
            margin: ${(props) => props.mergesTab && "0"};
            border: ${(props) =>
                props.mergesTab &&
                `1px solid ${props.color.text ? props.color.text : "#ddd"}`};

            &:hover {
                background: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeBackground
                            ? props.color.activeBackground
                            : "#25aae2"
                    }`};
                color: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeColor
                            ? props.color.activeColor
                            : "#fff"
                    }`};
                border-bottom: ${(props) =>
                    props.mergesTab &&
                    `1px solid ${
                        props.color.text ? props.color.text : "#ddd"
                    }`};
            }
            &.active {
                background: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeBackground
                            ? props.color.activeBackground
                            : "#25aae2"
                    }`};
                color: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeColor
                            ? props.color.activeColor
                            : "#fff"
                    }`};
                border: ${(props) => props.mergesTab && "none"};
            }
        }
    }
`;

export default Style;
