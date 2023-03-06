import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../layout/Layout";

const LiveMatch = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Layout>
      <div className="container">
        {loading ? (
          <h2
            style={{
              display: "flex",
              margin: "300px 0",
              justifyContent: "center",
            }}
          >
            Loading...
          </h2>
        ) : (
          <iframe
            style={{
              display: "flex",
              margin: "100px auto",
            }}
            width="500"
            height="500"
            src="https://www.youtube.com/embed/IJUj7FPq2Xo"
            title="PSG vs Nantes 4-2 Extеndеd Hіghlіghts &amp; All Goals 2023 Messi Goal"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </Layout>
  );
};

export default LiveMatch;
