import * as React from "react";
import PropTypes from 'prop-types'; 
import "./style.css";

const NewsArticle = (props) => {
  const { likes = 0, title, description } = props;
  return (
    <article className="newsArticle">
      <h2>{title}</h2>
      <div>{description}</div>
      <div>Likes :- {likes}</div>
    </article>
  );
};

export default NewsArticle;

NewsArticle.proptypes = {
  likes: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
