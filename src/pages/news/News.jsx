import React, { useState } from "react";
import Layout from "../../layout/Layout";
import data from "../../db/news.json";
import styles from "./news.module.css";
import { Link } from "react-router-dom";

const News = () => {
  const { articles } = data;
  return (
    <Layout>
      <div className={`container ${styles.news}`}>
        {articles.map((item, index) => (
          <div key={index} className={styles.singleArticale}>
            {item.urlToImage ? (
              <div className={styles.imgWrapper}>
                <img
                  className={styles.articleImg}
                  src={item.urlToImage}
                  alt="notfound"
                />
              </div>
            ) : (
              <div className={styles.imgWrapper}>
                <img
                  className={styles.articleImg}
                  src="https://www.planetsport.com/image-library/square/500/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
                  alt="notfound"
                />
              </div>
            )}
            <p style={{ margin: "20px 0" }}>{item.publishedAt}</p>
            <h3>
              <Link
                style={{
                  color: "#444",
                  textDecoration: "none",
                  lineHeight: "1.5",
                }}
                to={`/news/${index}`}
              >
                {item.title}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default News;
