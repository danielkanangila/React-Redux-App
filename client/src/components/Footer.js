import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <Wrapper>
            <img src={process.env.PUBLIC_URL + '/poweredby_nytimes_200c.png'} alt="NewYork Times" />
            <p>Copyright &copy; FirstNews 2020</p>
        </Wrapper>
    )
};

const Wrapper = styled.footer`
    width: 100%;
    margin-top: 30px;
    background-color: #212121;
    padding: 100px 0 50px;
    text-align: center;
    p {
        padding: 20px 0;
        letter-spacing: 2px;
        color: #fff;
    }
`

export default Footer;