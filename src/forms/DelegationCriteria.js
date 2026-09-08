import React from "react";

export default function DelegationCriteria() {
  const listStyle = {
    paddingLeft: "28px",
    lineHeight: "1.8",
    color: "#e0e0e0",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    margin: "20px 0",
  };

  return (
    <div style={{ color: "white" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          letterSpacing: "0.5px",
        }}
      >
        Delegation Criteria
      </h2>

      <ol style={listStyle}>
        <li>
          A delegation must consist of at least <strong>8 people</strong> and at most <strong>20 people</strong>.
        </li>
        <li>
          There should be <strong>at least one delegate</strong> in each committee.
        </li>
        <li>
          There should be <strong>at least 1 and at most 3 delegates</strong> in the International Press Corps (IP).
        </li>
        <li>
          All members of the delegation must belong to the same institution. (<strong>No Private Delegations are allowed</strong>).
        </li>
      </ol>
    </div>
  );
}