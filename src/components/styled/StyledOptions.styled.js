import styled from "styled-components"

const StyledOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        p {
            color: ${({theme}) => theme.colors.darkGrayishCyan};
        }
    }
    .bill, .number-of-people {
        > .bill-input, > .number-of-people-input {
            width: 100%;
            height: fit-content;
            position: relative;
            input {
                padding: 0.3rem;
                width: 100%;
                height: 100%;
                background-color: ${({theme}) => theme.colors.veryLightGrayishCyan};
                border: none;
                border-radius: 10px;
                text-align: right;
                color: ${({theme}) => theme.colors.veryDarkCyan};
                &:focus {
                    border: none;
                    outline: none;
                }
                &:hover, &:active, &:focus {
                    outline: 3px solid ${({theme}) => theme.colors.strongCyan};
                }
            }
            img {
                position: absolute;
                top: 50%;
                left: 5%;
                transform: translateY(-50%);
            }
        }
    }
    .select-tip {
        > .select-tip-options {
            display: grid;
            gap: 0.5rem;
            grid-template-columns: 1fr 1fr;
            .select-tip-options-option {
                color: white;
                background-color: ${({theme}) => theme.colors.veryDarkCyan};
                padding: 0.3rem;
                text-align: center;
                border-radius: 5px;
                &:hover {
                    cursor: pointer;
                    background-color: ${({theme}) => theme.colors.strongCyan};
                } 
            }
            .select-tip-options-custom {
                width: 100%;
                height: fit-content;
                input {
                    padding: 0.3rem;
                    width: 100%;
                    height: 100%;
                    background-color: ${({theme}) => theme.colors.veryLightGrayishCyan};
                    border: none;
                    border-radius: 5px;
                    text-align: right;
                    color: ${({theme}) => theme.colors.veryDarkCyan};
                    letter-spacing: 0.1rem;
                    &:focus {
                        border: none;
                        outline: none;
                    }
                    &:hover, &:active, &:focus {
                        outline: 3px solid ${({theme}) => theme.colors.strongCyan};
                    }
                }
            }
        }
    }
    @media screen and (min-width: 376px) {
        .select-tip {
            > .select-tip-options {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    }
`

export default StyledOptions