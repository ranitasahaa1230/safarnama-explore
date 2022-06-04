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
    "“Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta. This is definitely among the most inspiring travel quotes which I love the most.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "edequitt@gmail.com",
        text: "What a picture!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    postMedia: {
      url:"https://res.cloudinary.com/dntskzrkt/image/upload/v1654197540/3d52d2ce362416e650b9ed833c4ed3ce_o7xmag.jpg",
      original_filename: "travel-post-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
      original_filename: "ranitasaha",
    },
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2022-05-25T16:43:34+05:30",
    updatedAt: "2022-05-25T16:43:34+05:30",
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
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
     original_filename: "ranitasaha",
    },
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2022-05-18T16:43:34+05:30",
    updatedAt: "2022-05-18T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "“No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow.” – Lin Yutang",
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
    postMedia:{
      url:"https://res.cloudinary.com/dntskzrkt/image/upload/v1654197289/feed-5_h8vqt1.jpg",
      original_filename: "travel-post-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
      original_filename: "ranitasaha",
    },
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2021-03-25T16:43:34+05:30",
    updatedAt: "2021-04-25T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
    "The happiest people are the ones with the strongest connections to others, be it family, friends or the general community. One of the best ways to improve these relationships is by traveling together and experiencing new things together. You will find that it creates an opportunity to have some of the most important memories of your life, and this level of connection does wonders for relationships.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "edequitt@gmail.com",
        text: "Looks yum",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    postMedia:null,
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654276183/profile-6_bzwxjv.jpg",
      original_filename: "riassingh145",
    },
    firstName: "Ria",
    lastName: "Singh",
    username: "riassingh145",
    createdAt: "2021-10-20T16:43:34+05:30",
    updatedAt: "2021-10-20T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
    "“Live with no excuses and travel with no regrets” ~ Oscar Wilde. ...",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "keshavtarakk123",
        text: "Beautiful quote!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    postMedia: {
      url:"https://res.cloudinary.com/dntskzrkt/image/upload/v1654196588/feed-3_yegetz.jpg",
      original_filename: "ranitasaha",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
      original_filename: "ranitasaha",
    },
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2021-03-25T16:43:34+05:30",
    updatedAt: "2021-04-25T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
    "People who love to eat are always the best people.To eat is a necessity, but to eat intelligently is an art. We all eat, an it would be a sad waste of opportunity to eat badly.If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "edequitt@gmail.com",
        text: "Looks yum",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    postMedia:{
      url:"https://res.cloudinary.com/dntskzrkt/image/upload/v1654196339/cld-sample-4.jpg",
      original_filename: "travel-post-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654275935/profile-11_c6beru.jpg",
      original_filename: "dubeyRoh",
    },
    firstName: "Rohan",
    lastName: "Dubey",
    username: "dubeyRoh",
    createdAt: "2021-10-20T16:43:34+05:30",
    updatedAt: "2021-10-20T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
    "“The most beautiful in the world is, of course, the world itself.” -Wallace Stevens.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "edequitt@gmail.com",
        text: "What a picture!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    postMedia:{
      url:"https://res.cloudinary.com/dntskzrkt/image/upload/v1654197867/woman-traveling-norway-sightseeing_lcanhe.jpg",
      original_filename: "travel-post-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
      original_filename: "ranitasaha",
    },
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2021-06-25T16:43:34+05:30",
    updatedAt: "2021-06-25T16:43:34+05:30",
  },
];