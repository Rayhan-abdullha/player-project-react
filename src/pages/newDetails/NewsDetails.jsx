import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../db/news.json";
import Layout from "../../layout/Layout";
import styles from "./newsDetails.module.css";

const NewsDetails = () => {
  const { newsId } = useParams();
  const news = articles.find((item, index) => index === parseInt(newsId));
  return (
    <Layout>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            {news.urlToImage ? (
              <img src={news.urlToImage} alt="notfound" />
            ) : (
              <img
                src="https://www.planetsport.com/image-library/square/500/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
                alt="notfound"
              />
            )}
          </div>
          <div>
            <h3 style={{ marginBottom: "10px", lineHeight: "1.5" }}>
              {news.title}
            </h3>
            <p style={{ lineHeight: "1.5" }}>
              {news.description
                ? news.description
                : "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team"}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetails;
