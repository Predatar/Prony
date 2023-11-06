import React from "react";

const LogTag = ({ changelog, feedback, admin }) => {
  return (
    <div className="changelog-item__labels">
      {changelog && (
        <span style={{ background: "#546E7A", color: "#fff" }}>Changelog</span>
      )}
      {admin && <span style={{ background: "#BFBECD" }}>Admin</span>}
      {feedback && (
        <span style={{ background: "#03B8FD", color: "#fff" }}>Feedback</span>
      )}
    </div>
  );
};

export default LogTag;
