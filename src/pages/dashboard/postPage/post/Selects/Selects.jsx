import React, { useState, useEffect } from "react";
import Select from "../../../../../components/select/Select";
import Filter from "../Filter/FilterPopup/FilterPopup";
import { SelectInPopup, selects } from "../../../../../data/select";

const Selects = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };

  return selects.map(
    ({
      name,
      id,
      width,
      widthPopup,
      content,
      subselect,
      count,
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
              <Filter title={title}>
                <div key={id} className="filter-form__wrapper">
                  {subselect ? (
                    <SelectInPopup
                      title={subselect.name}
                      content={subselect.content}
                    />
                  ) : (
                    content
                  )}
                </div>
              </Filter>
            )}
          </Select>
        </div>
      );
    }
  );
};

export default Selects;
