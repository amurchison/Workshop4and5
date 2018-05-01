var initialData = {
  // The "user" collection. Contains all of the users in our Facebook system.
  "users": {
    "1": {
      "_id": 1,
      "userName": "BigJim",
      "email": "bigjim@gmail.com",
      "password": "*********"
    }
   }
   "cities":[
     {
       "_id": 1,
       "name": "Boston",
       "reviews":[
         {
         "author": "Phil",
         "date": "04/30/18",
         "reviewmsg": "Cool city but the weather was terrible."
         },
         {
         "author": "Ryan R",
         "date": "5/02/18",
         "reviewmsg": "Got to see a Red Sox game here. It was pretty cool. Definitely worth it."
         },
         {
         "author": "Johnny",
         "date": "5/03/18",
         "reviewmsg": "Didn't really enjoy my time here. My family seemed to like it but I was not a fan of the food in the area."
         }
       ],
       "events":[
         {
         "title": "Celtics Game",
         "date": "5/05/18",
         "price": 75,
         "hobby": 1
         },
         {
         "title": "Red Sox Game",
         "date": "5/06/18",
         "price": 95,
         "hobby": 1
         },
         {
         "title": "Bruins Game",
         "date": "5/06/18",
         "price": 100,
         "hobby": 1
         },
         {
         "title": "Eataly Boston",
         "date": "",
         "price": 0,
         "hobby": 2
         },
         {
         "title": "Venu Nightclub",
         "date": "",
         "price": 0,
         "hobby": 4
         },
         {
         "title": "MassParks",
         "date": "",
         "price": 0,
         "hobby": 3
         }
       ]
     }
     }
  ]
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
