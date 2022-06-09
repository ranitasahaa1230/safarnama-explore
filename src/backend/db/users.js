import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    password: "ranitasaha@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
    profileBackgroundUrl: "",
    websiteUrl: "https://ranitasaha.netlify.app",
    bio: "☆ Learning, Living, Loving every bit of this glorious life.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ria",
    lastName: "Singh",
    username: "riassingh145",
    password: "riasingh@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654276183/profile-6_bzwxjv.jpg",
    original_filename: "riassingh145",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am a passionate frontend developer.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cindrella",
    lastName: "Rose",
    username: "rosyy123",
    password: "cindrella@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717827/profile-3_hklice.jpg",
    original_filename: "rosyy123",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am an avid traveller.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Keshav",
    lastName: "Tarak",
    username: "keshavtarakk123",
    password: "keshavtarak@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717674/profile-8_eyqfwa.jpg",
    original_filename: "keshavtarakk123",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am fourth user.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rohan",
    lastName: "Dubey",
    username: "dubeyRoh",
    password: "rohandubey@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654275935/profile-11_c6beru.jpg",
    original_filename: "dubeyRoh",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am fifth user.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nidhi",
    lastName: "Vasa",
    username: "nidhiivasaa",
    password: "nidhivasa@345",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717799/profile-1_ly2ecn.jpg",
    original_filename: "nidhiivasaa",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am sixth user.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ishita",
    lastName: "Verma",
    username: "Kishitaa",
    password: "vermaishh@123",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717659/profile-5_bchyit.jpg",
    original_filename: "Kishitaa",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am seventh user.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ede",
    lastName: "Quitt",
    username: "edeeQuitt45",
    password: "edequitt@13",
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654716973/profile-10_rs0ky5.jpg",
    original_filename: "edeeQuitt45",
    profileBackgroundUrl: "",
    websiteUrl: "https://twitter.com/Ifullofsunshine",
    bio: "☆ I am eighth user.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
