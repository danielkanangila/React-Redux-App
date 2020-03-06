import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import styled from 'styled-components';
import { getArticles } from './../store/actions';

const SubNav = () => {
    const [currentPeriod, setCurrentPeriod] = useState(1)
    const periods = useSelector(state => state.periods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles(currentPeriod));
    }, [currentPeriod]);

    const getActiveClassName = value => {
        return currentPeriod === value ? 'active' : 'period';
    }

    return(
        <Wrapper className="container">
            <Item className="title">Most articles viewed in: </Item>
            {periods.map(period => 
                <Item
                    key={period.value}
                    onClick={() => setCurrentPeriod(period.value)} 
                    className={getActiveClassName(period.value)}>
                        {period.name}
            </Item>)}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    display: flex;
    border-bottom: 1px solid #ccc;
`;

const Item = styled.li`
    padding: 15px;
    transition: ease .3s;
    cursor: pointer;
    text-align: center;
    &:hover, &.active {
        background-color: #ccc;
        color: #000;
    }
    &.title {
        font-weight: bold;
        padding-left: 0;
        margin-right: 5px;
        text-align: left;
        &:hover {
            background-color: transparent;
            color: inherit;
        }
        cursor: text;
    }
`;

export default SubNav;