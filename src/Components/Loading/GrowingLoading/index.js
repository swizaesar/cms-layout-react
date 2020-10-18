import React from "react";
import { Spinner } from "reactstrap";

import GrowingLoadingStyled from "./index.style";

const GrowingLoading = ({ active = false }) => {
    return active ? (
        <GrowingLoadingStyled>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
        </GrowingLoadingStyled>
    ) : (
        false
    );
};

export default GrowingLoading;
