import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Button from "../../../Components/Particle/Button";
import Form from "../../../Components/Molekul/FormValidation";
// import Logo from "../../../Components/Assets/Image/Lakugan_Logo.png";
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
            label: "Username",
            col: 12,
            valid: "Username tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            type: "password",
            action: "password",
            name: "password",
            label: "Password",
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
                    <Col xl="6" md="6" sm="8" xs="12">
                        <Row className="justify-content-center mb-3">
                            <Col xl="8" md="8" sm="8" xs="12">
                                {/* <img
                                    src={Logo}
                                    alt="logo"
                                    className="img-fluid"
                                /> */}
                            </Col>
                        </Row>
                        <Card>
                            <CardBody>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Style>
    );
};
export default Login;
