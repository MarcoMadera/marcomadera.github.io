import React from "react";
import "./styles/BlogListView.css";
import { Link } from "react-router-dom";

const BlogListView = (props) => {
  return (
    <article className="BlogListView">
      <Link
        className="text-reset text-decoration-none"
        to={`/blog${props.link ? props.link : ""}`}
      >
        <header className="BlogListView__header">
          <div className="BlogListView__header__content">
            <h4 className="BlogListView__header__content__title">
              {props.title}
            </h4>
            <p className="BlogListView__header__content__excerpt">
              {props.excerpt}
              ...{" "}
              <span className="BlogListView__header__content__excerpt__readMore">
                Leer más
              </span>
            </p>
          </div>
          <picture>
            <source
              srcSet={props.coverWebp}
              type="image/webp"
              alt={props.title}
            />
            <img
              src={props.cover}
              alt={props.title}
              className="BlogListView__header__preview"
            />
          </picture>
        </header>
      </Link>
      <footer className="BlogListView__footer">
        {(() => {
          let tags = [];
          for (let i = 0; i < props.tags.length; i++) {
            tags.push(
              <span key={i}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/blog/tag/${props.tags[i]}`}
                >
                  <span className="BlogListView__footer__tags">
                    #{props.tags[i]}
                  </span>{" "}
                </Link>
              </span>
            );
          }
          return tags;
        })()}
        <p className="BlogListView__footer__meta">
          Marco Madera | {props.date}
        </p>
      </footer>
    </article>
  );
};

export default BlogListView;
