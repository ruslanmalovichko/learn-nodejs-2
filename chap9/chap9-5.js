function NewObj(name) {
   this.name = name;
}

// NewObj.prototype.doLater = function() {
//    setTimeout(function() { // this form setTimeout
//       // console.log(this.name);
//       console.log(this);
//    }, 1000);
// };

// NewObj.prototype.doLater = function() {
//    var self = this;
//    setTimeout(function() {
//       console.log(self.name);
//    }, 1000);
// };

NewObj.prototype.doLater = function() {
   setTimeout((toTest) => {
      console.log(this.name);
   }, 1000);
};

var obj = new NewObj('shelley');
obj.doLater();

