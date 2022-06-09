import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "“The most beautiful in the world is, of course, the world itself.” -Wallace Stevens.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654197867/woman-traveling-norway-sightseeing_lcanhe.jpg",
      original_filename: "travel-post-image",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2021-06-25T16:43:34+05:30",
    updatedAt: "2021-06-25T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "“Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta. This is definitely among the most inspiring travel quotes which I love the most.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654492306/feed-2_q6qbca.jpg",
      original_filename: "travel-post-image",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
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
    postMedia: null,
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
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
    bookmark: [],
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
    postMedia: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654197289/feed-5_h8vqt1.jpg",
      original_filename: "travel-post-image",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
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
    bookmark: [],
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
    postMedia: null,
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654276183/profile-6_bzwxjv.jpg",
    original_filename: "riassingh145",
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
    bookmark: [],
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
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654196588/feed-3_yegetz.jpg",
      original_filename: "ranitasaha",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654273074/profile-4_nsuffr.jpg",
    original_filename: "ranitasaha",
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    createdAt: "2021-03-25T16:43:34+05:30",
    updatedAt: "2021-03-25T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "People who love to eat are always the best people.To eat is a necessity, but to eat intelligently is an art. We all eat, an it would be a sad waste of opportunity to eat badly.If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ria",
          lastName: "Singh",
          username: "riassingh145",
          password: "riasingh@123",
          profileImage: null,
        },
        {
          _id: uuid(),
          firstName: "Cindrella",
          lastName: "Rose",
          username: "rosyy123",
          password: "cindrella@123",
          profileImage: null,
        },
      ],
      dislikedBy: [],
    },
    bookmark: [],
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
    postMedia: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654196339/cld-sample-4.jpg",
      original_filename: "travel-post-image",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654275935/profile-11_c6beru.jpg",
    original_filename: "dubeyRoh",
    firstName: "Rohan",
    lastName: "Dubey",
    username: "dubeyRoh",
    createdAt: "2021-10-20T16:43:34+05:30",
    updatedAt: "2021-10-20T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "Success is a journey, not a destination. The doing is often more important than the outcome.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
    postMedia: null,
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717827/profile-3_hklice.jpg",
    original_filename: "rosyy123",
    firstName: "Cindrella",
    lastName: "Rose",
    username: "rosyy123",
    createdAt: "2022-03-20T16:43:34+05:30",
    updatedAt: "2022-04-20T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "“In the end, we only regret the chances we didn’t take”. In 2017, we took an exciting and scary step. We decided to turn our travel blog from a hobby into our full-time job. We would’ve had so much regret if we didn’t take this opportunity. Now, each of these travel quotes fit the stories we’ve made.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
    postMedia: null,
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717674/profile-8_eyqfwa.jpg",
    original_filename: "keshavtarakk123",
    firstName: "Keshav",
    lastName: "Tarak",
    username: "keshavtarakk123",
    createdAt: "2019-11-20T16:43:34+05:30",
    updatedAt: "2019-11-20T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content: "Not all those who wander are lost",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654719248/feed-1_ptkdwv.jpg",
      original_filename: "travel",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717799/profile-1_ly2ecn.jpg",
    original_filename: "nidhiivasaa",
    firstName: "Nidhi",
    lastName: "Vasa",
    username: "nidhiivasaa",
    createdAt: "2021-03-25T16:43:34+05:30",
    updatedAt: "2021-04-25T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content: "Went to a girls' trip for the first time...Had so much fun!",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ria",
          lastName: "Singh",
          username: "riassingh145",
          password: "riasingh@123",
          profileImage: null,
        },
        {
          _id: uuid(),
          firstName: "Cindrella",
          lastName: "Rose",
          username: "rosyy123",
          password: "cindrella@123",
          profileImage: null,
        },
      ],
      dislikedBy: [],
    },
    bookmark: [],
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
    postMedia: {
      url: "https://res.cloudinary.com/dntskzrkt/image/upload/v1654719381/feed-4_hhlwhq.jpg",
      original_filename: "travel-post-image",
    },
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654717659/profile-5_bchyit.jpg",
    original_filename: "Kishitaa",
    firstName: "Ishita",
    lastName: "Verma",
    username: "Kishitaa",
    createdAt: "2021-09-05T16:43:34+05:30",
    updatedAt: "2021-09-05T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content: "“The journey of a thousand miles begins with a single step.”",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
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
    postMedia: null,
    profileImage:
      "https://res.cloudinary.com/dntskzrkt/image/upload/v1654716973/profile-10_rs0ky5.jpg",
    original_filename: "edeeQuitt45",
    firstName: "Ede",
    lastName: "Quitt",
    username: "edeeQuitt45",
    createdAt: "2021-08-25T16:43:34+05:30",
    updatedAt: "2021-08-25T16:43:34+05:30",
  },
];
