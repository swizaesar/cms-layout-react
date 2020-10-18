import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Button from "../../../Components/Particle/Button";
import Form from "../../../Components/Molekul/FormValidation";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LocalStorage from "../../../Utils/LocalStorage";
import { useEffect } from "react";

const Style = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        font-family: "Sansita Swashed", cursive;
        font-weight: 700;
        font-size: 28px;
        text-align: center;
    }
`;
const Login = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const history = useHistory();
    const [form, setForm] = useState([
        {
            type: "text",
            action: "text",
            name: "userName",
            placeholder: "Username",
            col: 12,
            valid: "Username tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            type: "password",
            action: "password",
            name: "password",
            placeholder: "Password",
            col: 12,
            valid: "Password tidak boleh kosong",
            value: "",
            status: false,
        },
    ]);

    const handlerSubmitData = (e) => {
        let isError = false;
        e.preventDefault();
        for (let key in form) {
            if (!form[key].status) {
                isError = true;
            }
        }
        setValidationClick(isError);
        setValidateForm(false);
        if (!isError) {
            let token = { token: "3275052410930008" };
            LocalStorage().save("auth", token);
            history.push("/admin/dashboard");
        }
    };
    useEffect(() => {});
    return (
        <Style id="login">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="4" md="4" sm="6" xs="12">
                        <Row className="justify-content-center mb-3">
                            <Col xl="12" md="12" sm="12" xs="12">
                                <h1 className="title">
                                    Welcome to React Layout CMS{" "}
                                </h1>
                            </Col>
                        </Row>
                        <form action="" onSubmit={handlerSubmitData}>
                            <Form
                                setForm={setForm}
                                validateForm={validateForm}
                                validationClick={validationClick}
                                form={form}
                            />
                            <Button block color="primary" type="submit">
                                Login
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Style>
    );
};
export default Login;
