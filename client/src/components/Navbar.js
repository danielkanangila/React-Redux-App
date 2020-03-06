import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, TextField } from './styled-components';

const Navbar = () => {
    const [isSearch, setIsSearch] = useState(false);
    return (
        <Nav>
            <Container className="tool-bar">
                <Logo className={isSearch ? 'display-none' : 'logo'}>FirstNews</Logo>
                <SearchInput className={isSearch ? 'w-100': 'search-box'}>
                    <TextField className={isSearch ? 'search-input active' : 'search-input'} type="search" name="search" placeholder="Search" />
                    <i onClick={() => setIsSearch(!isSearch)} className="fas fa-search search-icon"></i>
                </SearchInput>
            </Container>
        </Nav>
    )
}

const SearchInput = styled.div`
    position: relative;
    &.w-100 {
        margin-top: 10px;
        width: 100%;
        @media (min-width: 750px) {
            width: 300px;
        }
        @media (min-width: 750px) {
            margin-top: 0;
        }
    }
    .search-icon {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 1.3rem;
        cursor: pointer;
        &:hover {
            color: #2196f3;
        }
    }
`

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.25);
    .tool-bar {
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }
`

const Logo = styled.a`
    font-family: 'DM Serif Display', serif;
    font-size: 2.5rem;
    color:#000;
    padding: 15px 0;

    &.display-none {
        display: none;
        @media (min-width: 750px) {
            display: block;
        }
    }
`

export default Navbar;