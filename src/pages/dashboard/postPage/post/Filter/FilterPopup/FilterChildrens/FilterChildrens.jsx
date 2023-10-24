import React, { useState } from "react";
import CheckBox from "../../../../../../../UI/checkbox/Checkbox";
import Radio from "../../../../../../../UI/radio/Radio";
import Select from "../../../../../../../components/select/Select";

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
                <Radio />
                Last 24 hours
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <Radio />
                Last week
              </label>
            </div>
            <div className="filter-form__wrapper">
              <label>
                <Radio />
                Last month
              </label>
            </div>
          </>
        );
      case "Owners":
        const [shopOwners, setShowOwners] = useState(false);
        const handleSelectClickOwners = () => {
          setShowOwners((prev) => !prev);
        };
        return (
          <>
            <Select
              selectInPopup
              position={"static"}
              borderTop={"1px solid  #e0e0e0"}
              width={345}
              title="Select owners"
              onClick={handleSelectClickOwners}
            >
              {shopOwners && (
                <div className="owners">
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Max
                    </label>
                  </div>
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Artem
                    </label>
                  </div>
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Michael
                    </label>
                  </div>
                </div>
              )}
            </Select>
          </>
        );
      case "Author":
        const [shopAuthor, setShowAuthor] = useState(false);
        const handleSelectClickAuthor = () => {
          setShowAuthor((prev) => !prev);
        };
        return (
          <>
            <Select
              selectInPopup
              position={"static"}
              borderTop={"1px solid  #e0e0e0"}
              width={345}
              title="Select authors"
              onClick={handleSelectClickAuthor}
            >
              {shopAuthor && (
                <div className="authors">
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Author Name 1
                    </label>
                  </div>
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Author Name 2
                    </label>
                  </div>
                  <div className="filter-form__wrapper">
                    <label>
                      <CheckBox />
                      Author Name 3
                    </label>
                  </div>
                </div>
              )}
            </Select>
          </>
        );
      default:
        return null;
    }
  };

  return renderFilter();
};

export default FilterItems;
