//Constructor function
const User = function(name) {
  this.name = name;
  this.chatroom = null;
};
User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

//Constructor function
const Chatroom = function() {
  let users = {};

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        //single user message
        to.receive(message, from);
      } else {
        //Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(bard);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hello Jeff", jeff);
sara.send("Hello Brad", brad);
jeff.send("Hello Everyone!!!");
