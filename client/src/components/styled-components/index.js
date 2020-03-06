import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 2rem;
    @media (min-width: 750px) {
        padding: 0 3rem;
    }
    @media (min-width: 950px) {
        padding: 0 8rem;
    }
`;

export const TextField = styled.input`
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 15px;
    font-size: 0.9rem;
    width: 50px;
    transition: ease .3s;

    &::placeholder {
        color: transparent;
    }

    &:focus {
        box-shadow: 1px 1px 6px rgba(0,0,0,0.25);
        border-color: transparent
    }

    &.search-input.active {
        width: 100%;

        &::placeholder {
            color: #ccc;
        }
    }
`