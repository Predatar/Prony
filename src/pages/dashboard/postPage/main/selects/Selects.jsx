import React, { useState } from "react";
import Select from "../../../../../components/select/Select";
import { SelectInPopup } from "../../../../../data/select";
import Filter from "../filter/filterPopup/FilterPopup";
import { SmallSelects } from "./smallSelects/SmallSelects";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

const RenderSelects = ({ selectsData }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };

  return selectsData.map(
    ({
      name,
      id,
      width,
      widthPopup,
      content,
      subselect,
      count,
      calendar,
      filter: { title },
    }) => {
      return (
        <div key={id} className="posts-form__wrapper-select">
          <Select
            onClick={() => handleFilterClick(name)}
            id={id}
            widthPopup={widthPopup}
            width={width}
            title={name}
            count={count}
          >
            {openFilter === name && (
              <Filter onClick={() => setOpenFilter(!openFilter)} title={title}>
                <div key={id} className="filter-form__wrapper">
                  {calendar && <UserCalendarSelect />}
                  {subselect && (
                    <SelectInPopup
                      title={subselect.name}
                      content={subselect.content}
                    />
                  )}
                  {content}
                </div>
              </Filter>
            )}
          </Select>
        </div>
      );
    }
  );
};

export { RenderSelects };

const RenderSmallSelect = ({ smallSelectsData }) => {
  return smallSelectsData.map(({ id, name, width, select }) => {
    return (
      <SmallSelects
        id={id}
        name={name}
        key={name}
        width={width}
        select={select}
        selectFirst={select[0].fields}
      />
    );
  });
};

export { RenderSmallSelect };

const UserCalendarSelect = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="user-calendar">
      <Calendar onChange={onChange} value={value} locale="en" />
    </div>
  );
};
