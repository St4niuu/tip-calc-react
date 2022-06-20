import styled from "styled-components"

const StyledResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.veryDarkCyan};
    border-radius: 10px;
    > .tip-amount, .total {
        display: flex;
        justify-content: space-between;
        align-center: center;
        .left-bar {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            p:nth-of-type(1) {
                color: white;
                font-size: 70%;
            }
            p:nth-of-type(2) {
                color: white;
                font-size: 60%;
                color: ${({theme}) => theme.colors.darkGrayishCyan};
            }
        }
        .right-bar {
            color: ${({theme}) => theme.colors.strongCyan};
            font-size: 130%;
        }
    }
    button {
        padding: 0.3rem 0;
        border-radius: 5px;
        border: none; 
        outline: none;
        background-color: ${({theme}) => theme.colors.darkGrayishCyan};
        color: ${({theme}) => theme.colors.veryDarkCyan};
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
            background-color: ${({theme}) => theme.colors.strongCyan};
        }
    }
    @media screen and (min-width: 376px) {
        height: 15rem;
        width: 35rem;
        justify-content: space-between;
        .total {
            margin-top: -4rem;
        }
        > .tip-amount, .total {
        .right-bar {
            font-size: 180%;
        }
    }
    }
`

export default StyledResult