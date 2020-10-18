import styled from "styled-components";
import { Navbar } from "reactstrap";
import { color, sidebar } from "../../../Utils/Variable";
const Style = styled(Navbar)`
    position: fixed;
    display: block;
    overflow: auto;
    left: 0;
    top: 0;
    margin: 0;
    padding: 10px 0 0;
    bottom: 0;
    height: 100%;
    background: #fff;
    transition: all 0.25s ease;
    width: ${sidebar.width}px;
    box-shadow: 0 2px 4px #eee;
    z-index: 2;
    .img-fluid {
        margin: 10px auto 40px;
        width: 200px;
        display: block;
    }
    .navbar-heading {
        padding-left: 10px;
    }
    .nav-item {
        display: block;
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
        .nav-link {
            color: #aaa;
            font-weight: 400;
            transition: all 0.25s ease;
            .fa-sign-out-alt {
                transform: rotate(180deg);
            }
        }
        &:hover {
            .nav-link {
                color: ${color.primary};
                background: rgb(93 140 241 / 5%);
            }
        }
        .active {
            color: ${color.primary};
            border-right: 5px solid ${color.primary};
            font-weight: 600;
            background: rgb(93 140 241 / 5%);
        }
    }
    .nav-component {
        border-bottom: 2px solid #41474e;
    }
    @media (max-width: 767px) {
        width: ${(props) => (props.open ? "100%" : "0px")};
    }
`;
export default Style;
