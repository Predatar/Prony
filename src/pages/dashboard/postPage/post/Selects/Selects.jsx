import React, { useState, useEffect } from "react";
import Select from "../../../../../components/select/Select";
import Filter from "../Filter/FilterPopup/FilterPopup";
import { SelectInPopup, selects } from "../../../../../data/select";
import Checkbox from "../../../../../UI/checkbox/Checkbox";

const Selects = () => {
  const [openFilter, setOpenFilter] = useState("");
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    const result = selects.map(({ id, state, type }) => ({
      id,
      state,
      type,
    }));
    setFilterState(result);
    console.log(result);
  }, []);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter("");
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
      type,
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
          >
            {openFilter === name && (
              <Filter title={title}>
                <div key={id} className="filter-form__wrapper">
                  {subselect ? (
                    <SelectInPopup
                      title={subselect.name}
                      content={subselect.content.map(
                        (element, index) =>
                          type === "checkbox" && (
                            <Checkbox
                              onClick={() =>
                                setFilterState(
                                  (prev) =>
                                    (prev.find(
                                      (element) => element.id === id
                                    ).state[Object.keys(state)[index]] =
                                      !prev.find((element) => element.id === id)
                                        .state[Object.keys(state)[index]])
                                )
                              }
                              name={name}
                            >
                              {element}
                            </Checkbox>
                          )
                      )}
                    />
                  ) : (
                    content.map(
                      (element, index) =>
                        type === "checkbox" && (
                          <Checkbox
                            onClick={() =>
                              setFilterState(
                                (prev) =>
                                  (prev.find(
                                    (element) => element.id === id
                                  ).state[Object.keys(state)[index]] =
                                    !prev.find((element) => element.id === id)
                                      .state[Object.keys(state)[index]])
                              )
                            }
                            name={name}
                          >
                            {element}
                          </Checkbox>
                        )
                    )
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
