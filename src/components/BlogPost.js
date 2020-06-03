import React from "react";
import { useSelector } from "react-redux";
import BlogListView from "./BlogListView";
import BlogGridView from "./BlogGridView";

const BlogPost = (props) => {
  let listView = useSelector((state) => state.blogReducer.listView);
  if (listView) {
    return (
      <li>
        <BlogListView
          title={props.title}
          cover={props.cover}
          author={props.author}
          coverWebp={props.coverWebp}
          coverDescription={props.coverDescription}
          excerpt={props.excerpt}
          date={props.date}
          tags={props.tags}
          link={props.link}
        />
      </li>
    );
  } else {
    return (
      <li>
        <BlogGridView
          title={props.title}
          author={props.author}
          cover={props.cover}
          coverWebp={props.coverWebp}
          coverDescription={props.coverDescription}
          excerpt={props.excerpt}
          date={props.date}
          tags={props.tags}
          link={props.link}
        />
      </li>
    );
  }
};

export default BlogPost;