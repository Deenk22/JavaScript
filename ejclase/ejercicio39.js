function facebookprofile(name) {
    this.name = name;
    this.friends = 0;
    this.messages = [];
    this.postMessage = function (message) {
      this.messages.push(message);
      console.log(message);
    };
    this.deleteMessage = function (index) {
      if (index >= 0 && index < this.messages.length) {
        this.messages.splice(index, 1);
      } else {
        throw new Error("index incorrecto");
      }
    };
    this.addFriends = function () {
      this.friends++;
    };
    this.removeFriends = function () {
      if (this.friends > 0) {
        this.friends--;
      } else {
        throw new Error("no tienes. Animo");
      }
    };
  }
  const Santi = new facebookprofile("Santi");
  console.log(Santi);
  Santi.postMessage("hola");
  Santi.postMessage("hola2");
  Santi.postMessage("hola8");
  console.assert(Santi.messages.length === 3, "No añade bien los mensajes");
  Santi.deleteMessage(1);
  console.log(Santi.messages);
  console.assert(Santi.messages.length === 2, "No añade bien los mensajes");
  