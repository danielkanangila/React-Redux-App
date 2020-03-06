import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getArticles } from  '../../store/actions';
import MainArticle from './MainArticle';
import Article from './Article';
import {  Grid} from './../styled-components';

const Articles = ({articles, isFetching, error, getArticles}) => {
    
    const findArticlesWithMedia = () => {
        return articles.filter(article => article.media.length > 0);
    }
    const findArticlesWithoutMedia = () => {
        return articles.filter(article => article.media.length === 0);
    }
    return(
        <Wrapper>
            {isFetching && <h1 className="loading">Loading...</h1>}
            {error && <h1 className="error">{error}</h1>}
            {!isFetching ? 
                <MainArticle {...findArticlesWithMedia()[0]} />
            : null}
            <Grid>
                {!isFetching ? 
                    findArticlesWithMedia().map(article => <Article key={article.id} {...article} />)
                : null}
            </Grid>
            <Grid>
                {!isFetching ? 
                    findArticlesWithoutMedia().map(article => <Article key={article.id} {...article} />)
                : null}
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h1.loading {
        width: 100%;
        font-size: 2rem;
        color: #ccc;
        padding: 70px 0;
        text-align: center;
    }
    h1.error { padding: 70px 0; }
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