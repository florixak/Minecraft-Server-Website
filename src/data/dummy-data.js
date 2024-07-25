export const changelog = [
  {
    version: "1.0.0",
    date: "2023-09-20",
    changes: [
      {
        type: "added",
        description:
          "Initial release with basic store items including 'VIP Rank', 'VIP+ Rank', 'Coin Pack', and 'Token Bundle'.",
      },
    ],
  },
  {
    version: "1.0.1",
    date: "2023-09-28",
    changes: [
      {
        type: "fixed",
        description: "Corrected the price of 'Token Bundle' from 3.99 to 2.99.",
      },
      {
        type: "updated",
        description:
          "Improved the description of 'Coin Pack' to better reflect its benefits.",
      },
    ],
  },
  {
    version: "1.1.0",
    date: "2023-10-05",
    changes: [
      {
        type: "added",
        description:
          "Added 'benefits' array to store items to describe the privileges for each item.",
      },
      {
        type: "updated",
        description:
          "Updated descriptions for 'VIP Rank' and 'VIP+ Rank' to be more concise.",
      },
    ],
  },
];

export const storeItems = [
  {
    id: 1,
    name: "VIP Rank",
    description: "Unlock exclusive perks and privileges",
    benefits: [
      "Priority support",
      "Special chat colors",
      "Access to VIP-only areas",
    ],
    price: 7.99,
    category: "Ranks",
  },
  {
    id: 1,
    name: "VIP+ Rank",
    description: "Unlock exclusive perks and privileges",
    benefits: [
      "All VIP benefits",
      "Additional in-game bonuses",
      "Higher priority support",
      "More exclusive content",
    ],
    price: 14.99,
    category: "Ranks",
  },
  {
    id: 2,
    name: "Coin Pack",
    description: "Get extra in-game currency",
    benefits: ["Purchase items", "Upgrades", "More in-game content"],
    price: 5.99,
    category: "Currency",
  },
  {
    id: 3,
    name: "Token Bundle",
    description: "Exchange tokens for special items",
    benefits: ["Special items", "Rare upgrades", "Exclusive content"],
    price: 2.99,
    category: "Currency",
  },
];
