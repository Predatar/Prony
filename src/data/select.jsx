import React, { useEffect, useState } from "react";
import CheckBox from "../UI/checkbox/Checkbox";
import Radio from "..//UI/radio/Radio";
import Select from "../components/select/Select";

const SelectInPopup = ({ title, content }) => {
  const [openSelectInPopup, setSelectInPopup] = useState(false);
  return (
    <Select
      position={"static"}
      borderTop={"1px solid  #e0e0e0"}
      width={324}
      title={title}
      onClick={() => setSelectInPopup((prev) => !prev)}
    >
      {openSelectInPopup && content}
    </Select>
  );
};

export { SelectInPopup };

export const selects = [
  {
    name: "Tags",
    id: "tags",
    width: 178,
    count: true,
    widthPopup: 333,
    type: "checkBox",
    state: {
      noTags: false,
      tagName1: false,
      tagName2: false,
    },
    filter: {
      title: "Tags",
    },
    content: ["noTags", "tagName1", "tagName2"],
  },

  {
    name: "Boards",
    id: "boards",
    width: 221,
    widthPopup: 333,
    type: "checkBox",
    state: {
      boardName: false,
      boardName1: false,
      boardName2: false,
    },
    filter: {
      title: "Boards",
    },
    content: ["Authors", "Authors", "Authors"],
  },
  {
    name: "Statuses",
    id: "statuses",
    width: 221,
    widthPopup: 333,
    type: "checkBox",
    state: {
      noStatus: false,
      status1: false,
      status2: false,
    },
    filter: {
      title: "Statuses",
    },
    content: ["Authors", "Authors", "Authors"],
  },
  {
    name: "Owners",
    id: "owners",
    width: 324,
    widthPopup: 403,
    state: {
      artem: false,
      igor: false,
      denis: false,
    },
    filter: {
      title: "Owners",
    },
    subselect: {
      name: "Owners",
      id: "owners",
      width: 324,
      widthPopup: 403,
      type: "checkBox",
      filter: {
        title: "Owners",
      },
      content: ["Authors", "Authors", "Authors"],
    },
  },
  {
    name: "Author",
    id: "author",
    width: 324,
    widthPopup: 403,
    state: {
      artem: false,
      igor: false,
      denis: false,
    },
    filter: {
      title: "Authors",
    },
    subselect: {
      name: "Author",
      id: "author",
      width: 324,
      widthPopup: 403,
      type: "checkBox",
      filter: {
        title: "Authors",
      },
      content: ["Authors", "Authors", "Authors"],
    },
  },
  {
    name: "Created",
    id: "created",
    width: 164,
    widthPopup: 333,
    type: "radio",
    state: {
      noStatus: false,
      status1: false,
      status2: false,
    },
    filter: {
      title: "Created in",
    },
    content: ["Last 24 hours", "Last week", "Last month"],
  },
  {
    name: "Segments",
    id: "segments",
    width: 280,
    widthPopup: 333,
    type: "checkbox",
    state: {
      segments: false,
      segments: false,
      segments: false,
    },
    filter: {
      title: "User segments",
    },
    content: ["segments", "segments", "segments"],
  },
  {
    name: "Approved",
    id: "approved",
    width: 200,
    widthPopup: 333,
    type: "checkbox",
    state: {
      approved: false,
    },
    filter: {
      title: "Approved",
    },
    content: ["not approved"],
  },
];
