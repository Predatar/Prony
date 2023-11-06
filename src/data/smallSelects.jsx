export const smallSelects = [
  {
    id: "postSort",
    name: "Sort by:",
    width: 116,
    select: [
      { fields: "Newest", id: 1 },
      { fields: "Latest", id: 2 },
      { fields: "Older", id: 3 },
    ],
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

export const smallSelectView = [
  {
    id: "postView",
    width: 116,
    name: "Sort by:",
    secondaryText: "per page",
    select: [
      { fields: "Recent", id: 1 },
      { fields: "Latest", id: 2 },
      { fields: "Older", id: 3 },
    ],
  },
];

export const smallSelectUser = [
  {
    id: "userSelect",
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
