import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I trust that everything happens for a reason, even if we are not wise enough to see it.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rohan123@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "edequitt@gmail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ranitasaha@gmail.com",
        text: "Indeed. Loved this quote!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aisha@gmail.com",
        text: "Nice quote",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Good Morning, Fam, Travelling to Singapore today. Would share all the experiences in my stories.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neha@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "aisha@gmail.com",
        text: "Can't wait!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shreyas@gmail.com",
        text: "Yassss. Let's do this bro",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rohan@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "ranitasaha@gmail.com",
        text: "Made my morning. Nice quote!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "omkar@gmail.com",
        text: "Wow",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T16:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "The big lesson in life, baby, is never be scared of anyone or anything.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "riasingh@gmail.com",
    bookmark: [],
    comments: [],
    createdAt: "2022-02-25T08:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "There is only one happiness in this life, to love and be loved.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nidhi@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Don’t settle for what life gives you; make life better and build something.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ranitasaha@gmail.com",
    bookmark: [],

    comments: [
      {
        _id: uuid(),
        username: "shreyas@gmail.com",
        text: "Thats amazing quote",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2020-04-23T15:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Your boy got that job! Wohoooo!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrey123@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Happy Sunday, Fam! Good vibes only",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "omkar@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2021-04-30T10:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Sunday spent well!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ishita@gmail.com",
    comments: [],

    bookmark: [],
    createdAt: "2022-03-14T20:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "6 months of hardwork can change your life completely!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gaurav@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "ranitasaha@gmail.com",
        text: "Couldn't agree more!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "nidhivasa@gmail.com",
        text: "Yess, Indeed",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rohan@gmail.com",
        text: "Please tell about your journey more!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    bookmark: [],
    createdAt: "2022-05-13T07:55:12+05:30",
    updatedAt: formatDate(),
  },
];