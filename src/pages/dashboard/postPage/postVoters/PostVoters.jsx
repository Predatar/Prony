import React from "react";
import { Helmet } from "react-helmet";
import { MdUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";
import "./postVoters.scss";
import VotersPost from "./votersPost/VotersPost";
import person from "../../../../img/Post/Voters/person.png";
import Pagination from "../main/pagination/Pagination";
const postVoters = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Posts - Edit</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS}>Posts</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS_VOTERS}>Post voters</Link>
      </div>
      <div className="dashboard__main posts-voters">
        <div className="posts-voters__title">
          <div className="dashboard__title">Voters for</div>
          <span>“Send status updates back through Intercom” </span>
        </div>
        <div className="posts__buttons">
          <Link to={ROUTES.DASHBOARD_POSTS_EDIT}>
            <button className="posts__import">
              <MdUpload style={{ color: "#E0E0E0", width: 24, height: 24 }} />
              Export
            </button>
          </Link>
        </div>
      </div>
      <div className="post-voters-content">
        <div className="post-voters-content__wrapper">
          <VotersPost img={person} name="Sophia-Rose Nava" time="6 days ago" />
          <VotersPost
            grey
            img={person}
            name="Yuvaan Whittington"
            time="6 days ago"
          />
          <VotersPost img={person} name="Kristopher Winter" time="6 days ago" />
          <VotersPost grey img={person} name="Amal Gamble" time="6 days ago" />
          <VotersPost img={person} name="Amanah Mcneill" time="6 days ago" />
          <VotersPost grey img={person} name="Anna Walley" time="6 days ago" />
          <VotersPost img={person} name="Ashraf Ryder" time="6 days ago" />
          <VotersPost
            grey
            img={person}
            name="Clarke Wickens"
            time="6 days ago"
          />
        </div>
        <div className="post-voters-content__navigation">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default postVoters;
