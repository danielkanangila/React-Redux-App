import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const MainArticle = ({media, title, abstract, updated, section, url}) => {
    const getLastMedia = () => {
        if (media) {
            const lastIndex = media[0]['media-metadata'].length - 1;
            return media[0]['media-metadata'][lastIndex].url;
        }
    }
    return(
        <Wrapper>
            <div className="inner">
                <a href={url}></a>
                <Img src={getLastMedia()} alt={media} />
                <div className="text-content">
                    <h2>{title}</h2>
                    <p>{abstract}</p>
                    <p className="description">
                        Last update: 
                        <span>{moment(updated).startOf('hour').fromNow()}</span>
                    </p>
                    <p className="description">
                        Section: 
                        <span>{section}</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 25px 0;
    transition: all .3s;
    .inner {
        display: flex;
        flex-direction: column;
        position: relative;
        @media (min-width: 750px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
    a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    h2 {
        font-size: 2rem;
        padding: 15px 0; 
    }
    p {
        font-size: 1.1rem;
        margin-bottom: 15px;
        &.description, span {
            margin-bottom: 5px;
            font-size: 0.9rem;
            color: rgba(0,0,0,0.55);
        }
        span {
            margin-left: 10px;
        }
    }
    border-bottom: 1px solid #ccc;
    .text-content {
        width: 100%;
        @media (min-width: 750px) {
            width: 40%;
        }
    }
    @media (min-width: 750px) {
        border: none;
    }
`;

const Img = styled.img`
    width: 100%;
    @media (min-width: 750px) {
        width: 57%;
    }
`

export default MainArticle;