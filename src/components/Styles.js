import styled from 'styled-components';

export const Button = styled.div`
    position: fixed;
    width: 100%;
    left: 85%;
    bottom: 45px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    color: #0784a3;
    cursor: pointer;
    transition: color 0.5s;
    transition-timing-function: ease-in-out;

    animation-name: slideup;
    animation-delay: 0s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-in;

    &:hover {
        color: #85c6d6;
    }
    @keyframes slideup {
        0%{bottom:0;}
        100%{bottom:50;}    
    }
`