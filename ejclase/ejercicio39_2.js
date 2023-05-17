// function message(friend, text) {
//     this.friend = friend;
//     this.text = text;
//   }
  
//   function facebookprofile(name) {
//     this.name = name;
  
//     this.friends = [];
  
//     this.messages = [];
  
//     this.postMessage = function (friend, text) {
//       if (this.isFriend(friend)) {
//         this.messages.push(new message(friend, text));
//       } else {
//         throw new Error("No puedes enviar mensajes a alguien que no es tu amigo");
//       }
//     };
  
//     this.deleteMessageByIndex = function (amigo, index) {};
  
//     this.deleteMessageByName = function (amigo, text) {};
  
//     this.deleteMessagesByFriends = function (friend) {};
    
  
//     this.addFriend = function (friend) {
//       if (!this.isFriend(friend)) {
//         this.friends.push(friend);
//         friend.addFriend(this);
//       }
//     };
//     this.deleteFriend = function (friend) {
//       const index = this.friends.findIndex((item) => item === friend);
//       if (index !== -1) {
//         this.friends.splice(index, 1);
//         friend.deleteFriend(this);
//       }
//     };
//     this.isFriend = function (friend) {
//       return this.friends.findIndex((item) => item === friend) >= 0;
//     };
//   }
  
//   const Santi = new facebookprofile("Santi");
//   const fio = new facebookprofile("fio");
//   Santi.addFriend(fio);
//   Santi.deleteFriend(fio);
//   Santi.addFriend(fio);
//   Santi.postMessage(fio, "hola");
//   fio.postMessage(Santi, "hola hola");
//   Santi.deleteMessageByIndex(fio, 0);
  
//   console.log(Santi);
//   console.log(fio);
  


// function message (friend, text){
//   this.friend = friend;
//   this.text = text;
// }


// function facebookProfile (name){
//   this.name = name;
//   this.friends = [];
//   this.messages = [];



//   this.postMessage = function (friend,text){
//     if (this.isFriend(friend)){
//       this.messages.push(new message(friend, text));
//     } else {
//       throw new Error ('Para poder hablar necesitais ser amigos.')
//     }
//   };



//   this.isFriend = function (friend){
//     return this.friends.findIndex((newAmigo) => newAmigo === friend) >=0;
//   }


//   this.addFriend = function (friend){
//     if(!this.isFriend(friend)){
//       this.friends.push(friend);
//       friend.addFriend(this);
//     }
//   }


// }



// const Santi = new facebookProfile ("Santi");
// const Jose = new facebookProfile ("Jose");



// Santi.addFriend(Jose)
// Santi.postMessage(Jose, "Hola Jose, como estas!?");
// Jose.postMessage(Santi);



// console.log(Santi);









