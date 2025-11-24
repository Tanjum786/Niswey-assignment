import React from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import "./articledetailes.css";

export const ArticleDetailes = ({ data }) => {
  const { id } = useParams();
  const singleNewsData = data.find(
    (newsarticle) => newsarticle.id === Number.parseInt(id, 10)
  );
  const splitDate = singleNewsData?.date_gmt?.replace("T", "  / ");

  return (
    <div>
      {singleNewsData?.title?.rendered ? (
          <div className="singleArticle-container">
            {singleNewsData.jetpack_featured_media_url && (
              <div className="bannerContainer">
                <img
                  src={singleNewsData.jetpack_featured_media_url}
                  alt="Article Banner"
                  className="bannerImage"
                />
              </div>
            )}
            <h1
              className="titleSingelArticle"
              dangerouslySetInnerHTML={{
                __html: singleNewsData.title.rendered,
              }}
            />
            <div className="contentContainer">
              <p className="SingleauthorName">
                <strong>By: </strong>
                {singleNewsData.parsely.meta.author.map(
                  (authorName) => authorName.name
                )}
              </p>
              <p className="singleArticleDateTime">Date: {splitDate}</p>
              <p
                className="content"
                dangerouslySetInnerHTML={{
                  __html: singleNewsData.content?.rendered,
                }}
              />

              <a
                href={singleNewsData.link}
                target="_blank"
                rel="noreferrer"
                className="articleLink"
              >
                Read More About this News
              </a>
            </div>
          </div>
      ) : (
        <NavLink to="/">
          <h1 className="articlePageLink">Go to Articles list</h1>
        </NavLink>
      )}
    </div>
  );
};

ArticleDetailes.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date_gmt: PropTypes.string.isRequired,
      title: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }).isRequired,
      parsely: PropTypes.shape({
        meta: PropTypes.shape({
          author: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
            })
          ).isRequired,
        }).isRequired,
      }).isRequired,
      content: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }).isRequired,
      link: PropTypes.string.isRequired,
      jetpack_featured_media_url: PropTypes.string,
    })
  ).isRequired,
};
