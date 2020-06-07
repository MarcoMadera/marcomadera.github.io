import React from "react";
import "./styles/BlogGridView.css";
import { Link } from "react-router-dom";

const BlogGridView = (props) => {
  const title = props.title.replace(/\s/g, "-");
  return (
    <article className="BlogGridView">
      <Link
        className="text-reset text-decoration-none"
        to={`/blog/${props.id}/#${title}`}
      >
        <header className="BlogGridView__header">
          <picture>
            <source srcSet={props.coverWebp} type="image/webp" />
            <img
              src={props.cover}
              alt={props.coverDescription}
              className="BlogGridView__header__cover"
            />
          </picture>
          <div className="BlogGridView__header__content">
            <h4 className="BlogGridView__header__content__title">
              {props.title}
            </h4>
            <p className="BlogGridView__header__content__excerpt">
              {props.excerpt}
              ...{" "}
              <span className="BlogGridView__footer__readMore">Leer más</span>
            </p>
          </div>
        </header>
      </Link>
      <footer className="BlogGridView__footer">
        {(() =>
          props.tags.map((tags, i) => (
            <span key={i}>
              <Link
                className="text-reset text-decoration-none"
                to={`/blog/tag/${tags}`}
              >
                <span className="BlogGridView__footer__tags">#{tags}</span>{" "}
              </Link>
            </span>
          )))()}
        <p className="BlogGridView__footer__meta">
          {props.author} | {props.date}
        </p>
        <Link
          className="text-reset text-decoration-none"
          to={`/blog/${props.id ? props.id : ""}`}
        ></Link>
      </footer>
    </article>
  );
};

export default BlogGridView;
