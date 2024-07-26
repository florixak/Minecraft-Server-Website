import CaptureTheFlagImage from "../assets/CaptureTheFlag.png";
import CustomCosmeticsImage from "../assets/CustomCosmetics.png";

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

export const news = [
  {
    id: 1,
    title: "New Minigame: Capture the Flag",
    image: CaptureTheFlagImage,
    date: "2023-10-10",
    description:
      "Introducing a thrilling new minigame where players compete to capture the enemy's flag and bring it back to their base. Gather your team and strategize to claim victory!",
  },
  {
    id: 2,
    title: "Feature Update: Custom Cosmetics",
    image: CustomCosmeticsImage,
    date: "2023-10-15",
    description:
      "We've added a new feature that allows players to customize their appearance with unique cosmetics. Stand out from the crowd with stylish hats, colorful particle effects, and more!",
  },
  {
    id: 3,
    title: "Bug Fix: Teleportation Glitch",
    image: "../assets/CaptureTheFlag.png",
    date: "2023-10-20",
    description:
      "We've resolved a teleportation glitch that was causing players to get stuck in walls or fall through the ground. Enjoy smooth and seamless teleportation throughout the server!",
  },
  {
    id: 4,
    title: "New Reward: Monthly Loyalty Crate",
    image: "../assets/CaptureTheFlag.png",
    date: "2023-10-25",
    description:
      "To show our appreciation for your continued support, we're introducing the Monthly Loyalty Crate. Log in every month to receive exclusive rewards, including rare items, in-game currency, and more!",
  },
  {
    id: 5,
    title: "Cosmetic Update: Particle Effects",
    image: "../assets/CaptureTheFlag.png",
    date: "2023-10-30",
    description:
      "We've added a variety of new particle effects to enhance your gameplay experience. From sparkling trails to fiery explosions, customize your effects and make a dazzling impression!",
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
