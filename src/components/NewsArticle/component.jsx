import * as React from "react";
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
