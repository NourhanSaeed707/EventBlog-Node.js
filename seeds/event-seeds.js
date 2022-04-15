const db = require("../config/database");
const Event = require("../models/events");

let newEvent = [
    new Event({
            title: 'beach cleaning at Muscat 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            location: 'egypt',
            date: Date.now(),
            created_at: Date.now(),
    }),
    new Event({
        title: 'beach cleaning at Muscat 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'maldives',
        date: Date.now(),
        created_at: Date.now(),
    }),
    new Event({
        title: 'beach cleaning at Muscat 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'qatar',
        date: Date.now(),
        created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'dubai',
    date: Date.now(),
    created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'turkey',
    date: Date.now(),
    created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'canda',
    date: Date.now(),
    created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'spain',
    date: Date.now(),
    created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'italy',
    date: Date.now(),
    created_at: Date.now(),
}),
new Event({
    title: 'beach cleaning at Muscat 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'london',
    date: Date.now(),
    created_at: Date.now(),
}),
];
newEvent.forEach( (event) => {
      event.save( (err) => {
        if(err){
            console.log(err)
        }else{
            console.log("saved success");
        }
      });
})
