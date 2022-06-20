import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;

    @media screen and (min-width: 376px) {
        width: 30rem;
        flex-direction: row;
        box-shadow: 0px 0px 50px 1px;
    }
`

export default StyledContainer