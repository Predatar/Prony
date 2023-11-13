import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./breadCrumbs.scss";
import Container from "../Container/Container";
const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <Container>
        <div className="breadcrumbs__wrapper">{crumbs}</div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;