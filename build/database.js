var initialData = {
  // The "user" collection. Contains all of the users in our Facebook system.
  "users": {
    // This user has id "1".
    "1": {
      "_id": 1,
      "userName": "fuckme",
      "email": "fuckme@gmail.com",
      "password": "fuck"
    }
    "cities": {
      "1" : {
        "_id" : 1,
        "Name": "Boston"
        "Username" : "Louis L"
        "Reviews" : "Really enjoyed my time in Boston!! Has incredible history and so much to do"
      }
      "2" : {
        "_id" : 2,
        "Name" : "Boston"
        "Username" : "Blake Riegler"
        "Reviews" : "The salad here was unbelievable! A lot of good outdoor spots to run and exercise, if you want to become healthy this is a great spot to go!"
      }
      "3" : {
        "_id" : 3,
        "Name" : "Boston"
        "Username" : "Tom Hanks"
        "Reviews" : "The Boston sports teams are always exciting to check out and are always a joy to see with my family!"
      }
      "4" : {
        "_id" : 4,
        "Name" : "New York"
        "Username" : "Stephon Marbury"
        "Reviews" : "Best city in the world, what can I say"
      }
      "5" : {
        "_id" : 5,
        "Name" : "New York"
        "Username" : "Adam Sandler"
        "Reviews" : "The city that never sleeps!! Always something happening, and so many great things to check out"
      }
      "6" : {
        "_id" : 6,
        "Name" : "Chicago"
        "Username" : "Al Capone"
        "Reviews" : "Went to a cubs game and had a great time, 10 out of 10 would highly recommend"
      }
      }
    }
  }
};

function getUsername(){
    var username = initialData.users["1"]["userName"];
    return username;
}

function getEmail(){
    var email = initialData.users["1"]["email"];
    return email;
}

function getPassword(){
    var password = initialData.users["1"]["password"];
    return password;
}

/*
// The 'feedItems' collection. Contains all of the feed items on our Facebook
// system.
"feedItems": {
  "1": {
    "_id": 1,
    // A list of users that liked the post. Here, "Someone Else" and "Another Person"
    // liked this particular post.
    "likeCounter": [
      2, 3
    ],
    // The type and contents of this feed item. This item happens to be a status
    // update.
    "type": "statusUpdate",
    "contents": {
      // ID of the user that posted the status update.
      "author": 1,
      // 01/24/16 3:48PM EST, converted to Unix Time
      // (# of milliseconds since Jan 1 1970 UTC)
      // https://en.wikipedia.org/wiki/Unix_time
      "postDate": 1453668480000,
      "location": "Austin, TX",
      "contents": "ugh."
    },
    // List of comments on the post
    "comments": [
      {
        // The author of the comment.
        "author": 2,
        // The contents of the comment.
        "contents": "hope everything is ok!",
        // The date the comment was posted.
        // 01/24/16 22:00 EST
        "postDate": 1453690800000
      },
      {
        "author": 3,
        "contents": "sending hugs your way",
        "postDate": 1453690800000
      }
    ]
  }
}
*/
