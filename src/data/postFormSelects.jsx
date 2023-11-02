import React from "react";
export const selectsInPostForm = [
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
