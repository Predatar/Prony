export const smallSelects = [
  {
    id: "postSort",
    name: "Sort by:",
    width: 116,
    select: [{ fields: "Newest" }, { fields: "Latest" }, { fields: "Older" }],
  },
  {
    id: "postSort",
    width: 61,
    name: "Show:",
    secondaryText: "per page",
    select: [
      { fields: "10", id: 1 },
      { fields: "15", id: 2 },
      { fields: "20", id: 3 },
    ],
  },
];
