import React from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from "react-icons/hi2";

import "./pagination.scss";

import { smallSelects } from "../../../../../data/smallSelects";
import { SmallSelects } from "../selects/smallSelects/SmallSelects";

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <div className="pagination__body">
          <div className="pagination__left-icons">
            <button className="pagination__arrow">
              <HiChevronDoubleLeft
                style={{ width: 15, height: 15, color: "rgb(180 179 221)" }}
              />
            </button>
            <button className="pagination__arrow">
              <HiMiniChevronLeft
                style={{ width: 15, height: 15, color: "rgb(180 179 221)" }}
              />
            </button>
          </div>
          <div className="pagination__numbers">
            <ul className="pagination__number-list">
              <li className="pagination__list-item">
                <button className="active">1</button>
              </li>
              <li className="pagination__list-item">
                <button>2</button>
              </li>
              <li className="pagination__list-item">
                <button>3</button>
              </li>
              <li className="pagination__list-item">
                <button>4</button>
              </li>
              <li className="pagination__list-item">
                <button>5</button>
              </li>
            </ul>
          </div>
          <div className="pagination__left-icons">
            <button className="pagination__arrow">
              <HiChevronDoubleRight
                style={{ width: 15, height: 15, color: "rgb(180 179 221)" }}
              />
            </button>
            <button className="pagination__arrow">
              <HiMiniChevronRight
                style={{ width: 15, height: 15, color: "rgb(180 179 221)" }}
              />
            </button>
          </div>
        </div>
        <div className="pagination__show">
          <RenderOneSelect />
        </div>
      </div>
    </>
  );
};

export default Pagination;

const RenderOneSelect = () => {
  return smallSelects
    .filter(({ name }) => name === "Show:")
    .map(({ id, name, width, select }) => (
      <SmallSelects
        id={id}
        name={name}
        width={width}
        select={select}
        selectFirst={select[0].fields}
        key={id}
      />
    ));
};
