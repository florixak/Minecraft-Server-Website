import CaptureTheFlagImage from "../assets/images/CaptureTheFlag.png";
import Chest from "../assets/images/chest.png";
import Cosmetics from "../assets/images/cosmetics.png";
import TeleportGlitch from "../assets/images/TeleportGlitch.png";
import SkyWarsImage from "../assets/images/SkyWars.png";
import BedWarsImage from "../assets/images/BedWars.png";
import SkyBlockImage from "../assets/images/SkyBlock.png";
import UHCImage from "../assets/images/UHC.png";
import ParkourImage from "../assets/images/Parkour.png";
import BuildBattleImage from "../assets/images/BuildBattle.png";
import TNTRunImage from "../assets/images/TNTRun.png";

export const changelog = [
  {
    id: 1,
    version: "1.0.0",
    date: "2023-09-20",
    title: "Initial Release",
    description:
      "The initial release with basic store items including 'VIP Rank', 'VIP+ Rank', 'Coin Pack', and 'Token Bundle'.",
    image: null,
  },
  {
    id: 2,
    version: "1.0.1",
    date: "2023-09-28",
    title: "Price Correction and Description Update",
    description:
      "Corrected the price of 'Token Bundle' from 3.99 to 2.99. Improved the description of 'Coin Pack' to better reflect its benefits.",
    image: null,
  },
  {
    id: 3,
    version: "1.1.0",
    date: "2023-10-05",
    title: "Store Item Updates",
    description:
      "Added 'benefits' array to store items to describe the privileges for each item. Updated descriptions for 'VIP Rank' and 'VIP+ Rank' to be more concise.",
    image: null,
  },
  {
    id: 4,
    version: "1.2.0",
    date: "2023-10-10",
    title: "New Minigame: Capture the Flag",
    description:
      "Introducing a thrilling new minigame where players compete to capture the enemy's flag and bring it back to their base. Gather your team and strategize to claim victory!",
    image: CaptureTheFlagImage,
  },
  {
    id: 5,
    version: "1.2.1",
    date: "2023-10-15",
    title: "Feature Update: New Cosmetics",
    description:
      "We've added a new feature that allows players to customize their appearance with unique cosmetics. Stand out from the crowd with stylish hats, colorful particle effects, and more!",
    image: Cosmetics,
  },
  {
    id: 6,
    version: "1.2.2",
    date: "2023-10-20",
    title: "Bug Fix: Teleportation Glitch",
    description:
      "We've resolved a teleportation glitch that was causing players to get stuck in walls or fall through the ground. Enjoy smooth and seamless teleportation throughout the server!",
    image: TeleportGlitch,
  },
  {
    id: 7,
    version: "1.2.3",
    date: "2023-10-25",
    title: "New Reward: Monthly Loyalty Crate",
    description:
      "To show our appreciation for your continued support, we're introducing the Monthly Loyalty Crate. Log in every month to receive exclusive rewards, including rare items, in-game currency, and more!",
    image: Chest,
  },
];

export const news = changelog.slice(changelog.length - 4, changelog.length);

export const minigames = [
  {
    id: 1,
    name: "Capture the Flag",
    description:
      "Compete to capture the enemy's flag and bring it back to your base.",
    players: "2 teams of 4 players",
    duration: "15 minutes",
    image: CaptureTheFlagImage,
  },
  {
    id: 2,
    name: "SkyWars",
    description:
      "Battle against other players on floating islands, gather resources, and be the last one standing.",
    players: "Solo, Duos, or Squads",
    duration: "20 minutes",
    image: SkyWarsImage,
  },
  {
    id: 3,
    name: "BedWars",
    description:
      "Protect your bed, gather resources, and eliminate other teams to be the last one standing.",
    players: "2 teams of 4 players",
    duration: "30 minutes",
    image: BedWarsImage,
  },
  {
    id: 4,
    name: "Sky Block",
    description:
      "Survive on a dangerous flying island in the middle of nothing.",
    players: "Solo or Teams",
    duration: "On you",
    image: SkyBlockImage,
  },
  {
    id: 5,
    name: "UHC",
    description:
      "Ultra Hardcore is a game mode where players have limited health regeneration and must rely on golden apples, potions, and other resources to survive. It's a challenging and intense survival experience.",
    players: "Solo or Teams",
    duration: "60 minutes",
    image: UHCImage,
  },
  {
    id: 6,
    name: "Parkour",
    description:
      "Test your jumping and agility skills in a challenging parkour course.",
    players: "Solo",
    duration: "On you",
    image: ParkourImage,
  },
  {
    id: 7,
    name: "Build Battle",
    description:
      "Compete against other players to build the best structure based on a given theme.",
    players: "Solo or Teams",
    duration: "20 minutes",
    image: BuildBattleImage,
  },
  {
    id: 8,
    name: "TNT Run",
    description:
      "Run and jump on disappearing blocks while avoiding falling into the void.",
    players: "Solo",
    duration: "10 minutes",
    image: TNTRunImage,
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
