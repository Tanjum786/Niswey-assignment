import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./articleheading.css";

export const ArticleHeading = ({ data, loading }) => {
  return (
    <div>
      <h1 className="articleHeadline">Article Headlines</h1>
      {loading ? (
        <h1 className="loading-page">loading.....</h1>
      ) : (
          <div className="articleListContainer">
            {data.map((newsArticele) => {
              const splitDate = newsArticele.date_gmt.replace("T", "  / ");
              return (
                <NavLink
                  to={`/articledetail/${newsArticele.id}`}
                  className="navLink"
                  key={newsArticele.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="headongListContainer">
                    <ul className="headingList">
                      <li>
                        <h2
                          className="headingLink"
                          dangerouslySetInnerHTML={{
                            __html: newsArticele.parsely.meta.headline,
                          }}
                        />
                      </li>
                    </ul>
                    <div className="newsExcerpt-par">
                      <div className="newsExcerpt_image_container">
                        <div className="newsExcerpt-par">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: newsArticele.excerpt.rendered,
                            }}
                          />
                          <div className="authorContainer">
                            <p className="authorName">
                              Author:
                              {newsArticele.parsely.meta.author.map(
                                (authorName) => authorName.name
                              )}
                            </p>
                            <p className="dateTime">Date: {splitDate}</p>
                          </div>
                        </div>
                        <img
                          src={newsArticele.jetpack_featured_media_url}
                          alt="articleimage"
                          className="imageWidth"
                        />
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        )}
    </div>
  );
};

ArticleHeading.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date_gmt: PropTypes.string.isRequired,
      parsely: PropTypes.shape({
        meta: PropTypes.shape({
          headline: PropTypes.string.isRequired,
          author: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
            })
          ).isRequired,
        }).isRequired,
      }).isRequired,
      excerpt: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }).isRequired,
      jetpack_featured_media_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};
