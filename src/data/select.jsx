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
    state: {
      noTags: false,
      tagName1: false,
      tagName2: false,
    },
    filter: {
      title: "Tags",
    },
    content: (
      <>
        <label>
          <CheckBox />
          No tags
        </label>

        <label>
          <CheckBox />
          Tagname1
        </label>

        <label>
          <CheckBox />
          Tagname2
        </label>
      </>
    ),
  },

  {
    name: "Boards",
    id: "boards",
    width: 221,
    widthPopup: 333,
    state: {
      boardName: false,
      boardName1: false,
      boardName2: false,
    },
    filter: {
      title: "Boards",
    },
    content: (
      <>
        <label>
          <CheckBox />
          Board name1
        </label>

        <label>
          <CheckBox />
          Board name2
        </label>

        <label>
          <CheckBox />
          Board name3
        </label>
      </>
    ),
  },
  {
    name: "Statuses",
    id: "statuses",
    width: 221,
    widthPopup: 333,
    state: {
      noStatus: false,
      status1: false,
      status2: false,
    },
    filter: {
      title: "Statuses",
    },
    content: (
      <>
        <label>
          <CheckBox />
          No status
        </label>

        <label>
          <CheckBox />
          Satus1
        </label>

        <label>
          <CheckBox />
          Satus2
        </label>
      </>
    ),
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
      filter: {
        title: "Owners",
      },
      content: (
        <div className="owners">
          <label>
            <CheckBox />
            Artem
          </label>

          <label>
            <CheckBox />
            Igor
          </label>

          <label>
            <CheckBox />
            Denis
          </label>
        </div>
      ),
    },
  },
  {
    name: "Author",
    id: "author",
    width: 324,
    widthPopup: 403,
    count: true,
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
      filter: {
        title: "Authors",
      },
      content: (
        <div className="owners">
          <label>
            <CheckBox />
            Artem
          </label>

          <label>
            <CheckBox />
            Igor
          </label>

          <label>
            <CheckBox />
            Denis
          </label>
        </div>
      ),
    },
  },
  {
    name: "Created",
    id: "created",
    width: 164,
    widthPopup: 333,
    state: {
      noStatus: false,
      status1: false,
      status2: false,
    },
    filter: {
      title: "Created in",
    },
    content: (
      <>
        <label>
          <Radio />
          Last 24 hours
        </label>

        <label>
          <Radio />
          Last week
        </label>

        <label>
          <Radio />
          Last month
        </label>
      </>
    ),
  },
  {
    name: "User segments",
    id: "segments",
    width: 280,
    widthPopup: 333,
    state: {
      segments: false,
      segments: false,
      segments: false,
    },
    filter: {
      title: "User segments",
    },
    content: (
      <>
        <label>
          <CheckBox />
          Segment1
        </label>

        <label>
          <CheckBox />
          Segment2
        </label>

        <label>
          <CheckBox />
          Segment3
        </label>
      </>
    ),
  },
  {
    name: "Approved",
    id: "approved",
    width: 200,
    widthPopup: 333,
    state: {
      approved: false,
    },
    filter: {
      title: "Approved",
    },
    content: (
      <label>
        <CheckBox />
        not approved
      </label>
    ),
  },

  {
    name: "Board",
    id: "boardForm",
    width: 647,
    widthPopup: 647,
    filter: {
      title: "",
    },
    content: (
      <ul className="post-form__select-list">
        <li className="post-form__select-item">1 Board</li>
        <li className="post-form__select-item">2 Board</li>
        <li className="post-form__select-item">3 Board</li>
      </ul>
    ),
  },
  {
    name: "Owner",
    id: "ownerForm",
    width: 647,
    widthPopup: 647,
    filter: {
      title: "",
    },
    content: (
      <ul className="post-form__select-list">
        <li className="post-form__select-item">1 Selection</li>
        <li className="post-form__select-item">2 Selection</li>
        <li className="post-form__select-item">3 Selection</li>
      </ul>
    ),
  },
  {
    name: "Status",
    id: "statusrForm",
    width: 647,
    widthPopup: 647,
    filter: {
      title: "",
    },
    content: (
      <ul className="post-form__select-list">
        <li className="post-form__select-item">1 Status</li>
        <li className="post-form__select-item">2 Status</li>
        <li className="post-form__select-item">3 Status</li>
      </ul>
    ),
  },
];
