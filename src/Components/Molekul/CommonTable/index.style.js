import styled from "styled-components";
import { color } from "../../../Utils/Variable";

const StyleCommon = styled.div`
    .search-box {
        input {
            background-color: #f9f9f9;
            padding-top: 14px;
            padding-bottom: 14px;
            font-family: Muli;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.24;
            letter-spacing: normal;
            text-align: left;
            color: #656565;
            font-size: 16px;
            border-top-right-radius: 11px;
            border-bottom-right-radius: 11px;
            border: none;
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
        i {
            color: #656565;
        }
        .input-group-text {
            border: none;
            border-top-left-radius: 11px;
            border-bottom-left-radius: 11px;
            padding: 10px;
            background-color: #f9f9f9;
        }
    }
    .common-table-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .table {
        border-collapse: separate;
        border-spacing: 0 1em;
        font-family: "Muli", sans-serif;
        .thead-light th {
            background: transparent;
            border: 0;
            color: #4a4a4a;
            font-weight: bold;
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.24;
            letter-spacing: normal;
            text-align: left;
            border-bottom: 2px solid #f8f8f8;
            padding-left: 10px;
            padding-right: 10px;
        }
        th,
        td {
            border: 0;
            font-family: "Muli", sans-serif;
        }
        th {
            border-bottom: 1px solid #ddd;
        }
        tbody {
            tr {
                /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
                background-color: #f8f8f8;
                border-radius: 4px;
                margin: 10px 0;
                td {
                    padding: 12px 10px;
                    span {
                        font-family: "Muli", sans-serif;
                        font-size: 16px;
                        font-weight: 500;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.24;
                        letter-spacing: normal;
                        color: #484848;
                    }
                    .text-description {
                        white-space: normal;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        max-width: 300px;
                        /* display: block; */
                        display: -webkit-box;
                    }
                    &:first-child {
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                    }
                    &:last-child {
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                    }
                }
            }
        }
    }
    .table-top-filter {
        display: flex;
        justify-content: start;
        .btn-secondary {
            background: ${color.secondary};
            border: none;
        }
    }
    .pagination-table {
        display: block;
        width: 100%;
        margin-top: 30px;
    }

    .page-item .page-link {
        border: none;
    }

    .page-item {
        .page-link {
            box-shadow: none;
            border-radius: 10px;
            &.arrow {
                background-color: #d5ecff;
                opacity: 0.7;
                color: #93b4dd;
            }
        }
        &.disabled {
            .page-link {
                cursor: not-allowed;
                &.number {
                    background-color: #f0f3ff;
                    opacity: 1;
                    color: #93a2dd;
                }
                &.arrow {
                    background-color: #d5ecff;
                    color: #93b4dd;
                    opacity: 0.3;
                }
            }
        }
        &.active {
            .page-link {
                &.number {
                    background: #5db4ff;
                    color: #fff;
                    opacity: 1;
                }
                &.arrow {
                    opacity: 1;
                }
            }
        }
    }
`;

export default StyleCommon;
