import React, { useEffect, useRef, useState } from "react";
import {
  AreaChart,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { subDays } from "date-fns";

import { Link } from "react-router-dom";

import { FiChevronDown } from "react-icons/fi";

import ROUTES from "../../../routes/const";

import "./index.scss";

import photo1 from "../../../img/Activities/Photo1.png";
import photo2 from "../../../img/Activities/Photo2.png";

const MainPage = () => {
  const input = useRef();
  const [activeRadio, setActieRadio] = useState(0);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataVoters, setDataVoters] = useState([]);
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    input.current.checked = true;
    if (dataUsers.length == 0) {
      for (let i = 0; i < 15; i++) {
        setDataUsers((data) => [
          ...data,
          {
            name: subDays(new Date(), i).toISOString().substring(0, 10),
            value: Math.random() * (15 - 1) + 1,
          },
        ]);
        setDataVoters((data) => [
          ...data,
          {
            name: subDays(new Date(), i).toISOString().substring(0, 10),
            value: Math.random() * (15 - 1) + 1,
          },
        ]);
        setDataPosts((data) => [
          ...data,
          {
            name: subDays(new Date(), i).toISOString().substring(0, 10),
            value: Math.random() * (15 - 1) + 1,
          },
        ]);
      }
    }
  }, []);

  const CustomizedTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="chart__tooltip">
          <div className="chart__date">{label}</div>
          <div className="chart__number">
            {(payload[0].value * 1000).toFixed()}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-main">
      <Link to={ROUTES.DASHBOARD_HOME} className="dashboard__path">
        Dashboard
      </Link>
      <div className="dashboard__title">Dashboard</div>
      <div className="dashboard-main__container">
        <div className="dashboard-main__wrapper">
          <div className="dashboard-main__cards">
            {Card("Boards", 123)}
            {Card("Users", "1 623")}
            {Card("Posts", "1 623")}
            {Card("Votes", "1 623")}
          </div>
          <div className="chart">
            <div className="chart__header">
              <div className="chart__title">Statistic</div>
              <div className="chart__radio">
                <label
                  htmlFor="users"
                  className="chart__label"
                  style={{ "--color": "#1565C0" }}
                >
                  <input
                    type="radio"
                    name="chart"
                    id="users"
                    className="chart__input"
                    ref={input}
                    onChange={() => setActieRadio(0)}
                  />
                  <span className="chart__custom"></span>
                  Users
                </label>
                <label
                  htmlFor="voters"
                  className="chart__label"
                  style={{ "--color": "rgba(67, 160, 71, 1)" }}
                >
                  <input
                    type="radio"
                    name="chart"
                    id="voters"
                    className="chart__input"
                    onChange={() => setActieRadio(1)}
                  />
                  <span className="chart__custom"></span>
                  Voters
                </label>
                <label
                  htmlFor="posts"
                  className="chart__label"
                  style={{ "--color": "rgba(255, 152, 0, 1)" }}
                >
                  <input
                    type="radio"
                    name="chart"
                    id="posts"
                    className="chart__input"
                    onChange={() => setActieRadio(2)}
                  />
                  <span className="chart__custom"></span>
                  Posts
                </label>
              </div>
              <div className="chart__days">
                <FiChevronDown />
                last 90 days
              </div>
            </div>
            <div className="chart__main">
              <AreaChart
                width={970}
                height={390}
                data={
                  activeRadio == 0
                    ? dataUsers
                    : activeRadio == 1
                    ? dataVoters
                    : activeRadio == 2
                    ? dataPosts
                    : null
                }
              >
                <defs>
                  <linearGradient
                    id="paint0_linear_49_4827"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="#03B8FD" stopOpacity="0.46" />
                    <stop offset="1" stopColor="#03B8FD" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickCount={4}
                  tickFormatter={(str) => ""}
                />
                <YAxis
                  tickFormatter={(number) => `${number.toFixed(0)}k`}
                  tickLine={false}
                  tickCount={4}
                />
                <Tooltip content={<CustomizedTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#1565C0"
                  fill="url(#paint0_linear_49_4827)"
                />
              </AreaChart>
            </div>
            <div className="chart__footer">
              <div className="chart__month">January</div>
              <div className="chart__month">February</div>
              <div className="chart__month">March</div>
              <div className="chart__month">April</div>
            </div>
          </div>
        </div>
        <div className="dashboard-main__wrapper">
          <div className="activities">
            <div className="activities__title">Activities</div>
            <div className="activities__list">
              {ActivityItem(
                photo1,
                "Sophia-Rose Nava",
                "upvoted",
                "6 min ago",
                "Welcome to Nolt #1"
              )}
              {ActivityItem(
                photo2,
                "Yuvaan Whittington",
                "commented",
                "38 min ago",
                "Tips and Tricks #2",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              )}
              {ActivityItem(
                photo1,
                "Sophia-Rose Nava",
                "upvoted",
                "6 min ago",
                "Welcome to Nolt #1"
              )}
              {ActivityItem(
                photo2,
                "Yuvaan Whittington",
                "commented",
                "38 min ago",
                "Tips and Tricks #2"
              )}
            </div>
            <div className="activities__link">View more</div>
          </div>
        </div>
      </div>
    </div>
  );

  function ActivityItem(img, name, tag, time, title, descr) {
    return (
      <div className="activities__item">
        <div className="activities__header">
          <div className="activities__img">
            <img src={img} alt="avatar" loading="lazy" />
          </div>
          <div className="activities__info">
            <div className="activities__name">{name}</div>
            <div className="activities__tag">{tag}</div>
          </div>
          <div className="activities__time">{time}</div>
        </div>
        <div className="activities__main">
          <div className="activities__main-title">{title}</div>
          <div className="activities__main-descr">{descr}</div>
        </div>
      </div>
    );
  }

  function Card(title, number) {
    return (
      <div className="dashboard-main__card">
        <div className="dashboard-main__card-title">{title}</div>
        <div className="dashboard-main__card-number">{number}</div>
      </div>
    );
  }
};

export default MainPage;
