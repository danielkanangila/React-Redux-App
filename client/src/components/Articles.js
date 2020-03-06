import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getArticles } from  './../store/actions';

const Articles = props => {
    useEffect(() => {
        props.getArticles();
    }, [])
    return(
        <Wrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const mapStateToProps = state => {
    return {
        articles: state.articles,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getArticles }
)(Articles);