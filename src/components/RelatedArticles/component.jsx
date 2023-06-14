import React from 'react';
import PropTypes from 'prop-types';
import NewsArticle from '../NewsArticle/component';

export const RelatedArticles = (props) => {
    const { data } = props;
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {
                data.map((obj, index) => (
                    <NewsArticle
                        key={index}
                        likes={obj.likes}
                        title={obj.title}
                        description={obj.description}
                    />
                ))
            }
            {/* <NewsArticle
                likes={data[0].likes}
                title={data[0].title}
                description={data[0].description}
            />
            <NewsArticle
                likes={data[1].likes}
                title={data[1].title}
                description={data[1].description}
            /> */}
        </div>
    )
}


RelatedArticles.proptypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        likes: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
    })),
}
/*
    const data = [
        { likes: 200, title: 'Title 1', description: 'descroption 1' },
        { likes: 150, title: 'Title 2', description: 'descroption 2' },
    ];
    <RelatedArticles
        data={data}
    />

*/