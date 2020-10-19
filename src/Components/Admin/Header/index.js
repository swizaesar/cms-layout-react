import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

import Button from "../../../Components/Particle/Button";
import { color } from "../../../Utils/Variable";
const Style = styled.div`
    display: flex;
    padding: 20px;
    justify-content: flex-end;
    align-items: center;
    .fa-search,
    .fa-bell {
        color: ${color.secondary};
    }
    .fa-bell {
        font-size: 18px;
    }
    button {
        height: max-content;
    }
    .btn {
        &-group {
            align-items: center;
        }
    }
    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e6eaf9;
        color: ${color.secondary};
    }
    @media (max-width: 767px) {
        padding-left: 30px;
    }
`;
const Header = () => {
    return (
        <Style>
            <Row className="align-items-center">
                <Col xl="6" md="6" sm="6">
                    <Button type="button" color="#e6eaf9" className="mr-3">
                        <i className="far fa-bell"></i>
                    </Button>
                </Col>
            </Row>
        </Style>
    );
};
export default Header;
