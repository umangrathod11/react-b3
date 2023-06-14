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
