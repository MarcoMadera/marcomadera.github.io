import React, { useState, useEffect, memo } from "react";
import { entries } from "../BlogEntries";

const BlogSearch = (props) => {
  const { setLoading, setSearchResults, setPage, tag, loading } = props;
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (tag && loading) {
      const results = entries
        .filter((result) => result.tags.includes(tag))
        .map((blog) => ({ title: blog.title, id: blog.id, tags: tag }))
        .filter((blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        );
      setSearchResults(results);
    } else {
      const results = entries
        .map((blog) => ({ title: blog.title, id: blog.id, tags: blog.tags }))
        .filter((blog) =>
          blog.title
            .concat(blog.tags)
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      setSearchResults(results);
    }

    setPage(1);
    setLoading(false);
  }, [search || tag]);

  return (
    <div className="Blog__header_searchbox">
      <input
        className="Blog__header_searchbox__input"
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleChange}
        autoCapitalize="off"
        autoCorrect="off"
        maxLength="100"
        spellCheck="false"
      />
      <svg
        className="searchbox__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56.966 56.966"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
    </div>
  );
};

export default memo(BlogSearch);