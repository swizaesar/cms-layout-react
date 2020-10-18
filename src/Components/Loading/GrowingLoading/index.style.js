import styled from "styled-components";

const GrowingLoadingStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(173, 173, 173, 0.46);
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default GrowingLoadingStyle;
