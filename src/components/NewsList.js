import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

/*const sampleArticle = {
  title: "제목",
  description: "내용내용",
  url: "https://www.naver.com/",
  urlToImage:
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F082%2F2020%2F01%2F09%2F0000972696_002_20200109155604876.jpg&type=a340",
};*/

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  // 요청 대기 : true, 요청 끝 : false

  useEffect(() => {
    // async 사용을 위해 따로 함수 선언
    const fetchData = async () => {
      setLoading(true); // 요청 대기
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=668586b8daee4ff6bcf61c9a99a22f50`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false); //요청 끝
    };
    fetchData();
  }, [category]);

  // 대기 중인 상태라면
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  // article 값이 없을 때
  if (!articles) {
    return null;
  }

  // article 값이 있을 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
