import styled from "styled-components";

const FirstLoadStyle = styled.div`
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    .relative {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .logo {
        width: 65px;
        height: 170px;
        margin: auto;

        img {
            width: 100%;
            display: block;
            height: 100%;
            object-fit: contain;
        }
    }
`;

export default FirstLoadStyle;
