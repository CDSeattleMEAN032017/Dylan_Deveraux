module.exports = function (){
  return {
    add: function(num1, num2) {
        num1 += num2;
        return num1;
    },
    multiply: function(num1, num2) {
        num1*=num2;
        return num1;
    },
    square: function(num) {
        num*=num
        return num
    },
    random: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
};
