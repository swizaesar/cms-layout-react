import React from "react";
import { Button, Row, Col } from "reactstrap";

const CommontTableHeader = ({
    title = false,
    onCreate = {
        status: false,
        title: "Button Title",
        icon: "fas fa-plus",
        function: () => {},
    },
}) => {
    return (
        <Row className="align-items-center">
            <Col xs="8">
                <h6 className="mb-3">{title}</h6>
            </Col>
            <Col className="text-right" xs="4">
                {onCreate.status && (
                    <Button
                        onClick={onCreate.function}
                        className="btn-icon"
                        size="sm"
                        color="primary"
                        type="button"
                    >
                        <span className="btn-inner--icon">
                            <i className="fas fa-plus"></i>
                        </span>
                        <span className="btn-inner--text">
                            {onCreate.title}
                        </span>
                    </Button>
                )}
            </Col>
        </Row>
    );
};

export default CommontTableHeader;
