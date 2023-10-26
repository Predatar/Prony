import React from "react";
import CheckBox from "../../../../../../../UI/checkbox/Checkbox";

const FilterItems = ({ name }) => {
  const renderFilter = () => {
    switch (name) {
      case "Approved":
        return (
          <div className="filter-form__wrapper">
            <label>
              <CheckBox />
              not approved
            </label>
          </div>
        );

      case "Segments":
        return (
          <>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Segment1
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Segment2
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Segment3
              </label>
            </div>
          </>
        );

      case "Tags":
        return (
          <>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                No tags
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Tagname1
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Tagname2
              </label>
            </div>
          </>
        );
      case "Boards":
        return (
          <>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Board name1
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Board name2
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Board name3
              </label>
            </div>
          </>
        );
      case "Statuses":
        return (
          <>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                No status
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Satus1
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Satus2
              </label>
            </div>
          </>
        );
      case "Created":
        return (
          <>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Last 24 hours
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Last week
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <CheckBox />
                Last month
              </label>
            </div>
          </>
        );
      default:
        return null; // Возвращаем null по умолчанию, если значение checkBoxName не соответствует ни одному из вариантов
    }
  };

  return renderFilter();
};

export default FilterItems;
