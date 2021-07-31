const obj = {
  FULLNAME : "gunalan",
  LASTNAME : "deivaganpathy",
  age : 23,
  birthyear: 1998,
  friends : ['sia','lucia','perdon'],
  isDev : false,


  calcAge1: function (birthyear) {
    return 2021 - birthyear;
  },

  calcAge: function () {
    return 2021 - this.birthyear; // using this we can access the elements in the current record/obj just like self in python
  },
  calcAge2: function () {
    var v = this.birthyear
    this.age = 2021 - v
    return this.age; // using this we can access the elements in the current record/onj
  },
  getinfo: function(){
    return `${obj.FULLNAME} is ${obj.calcAge2()} old man and he is ${this.isDev ? 'a' : 'not a'} developer `
  }
}
console.log(obj.calcAge());
console.log(obj.calcAge1(obj.birthyear));
console.log(obj.calcAge2());
console.log(obj.getinfo());
