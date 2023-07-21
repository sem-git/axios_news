import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled, css } from "styled-components";

// 카테고리를 담는 변수 배열 선언
// name : API에 있는 실제 카테고리 값
// text : UI로 나타낼 변환 텍스트 값
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover {
        color: #3bc9db;
        /* border-bottom: 2px solid #6495ed; */
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  const location = useLocation();
  return (
    <CategoriesBlock>
      {categories.map((c) => {
        const isActive =
          c.name === "all"
            ? location.pathname === "/"
            : location.pathname === `/${c.name}`;
        return (
          <Category
            key={c.name}
            $active={isActive}
            to={c.name === "all" ? "/" : `/${c.name}`}
          >
            {c.text}
          </Category>
        );
      })}
    </CategoriesBlock>
  );
};

export default Categories;
