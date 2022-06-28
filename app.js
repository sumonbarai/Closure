var num3 = 50;
var demo = function () {
  var num1 = 10;
  var num2 = 20;
  return function () {
    var total = num1;
    return total;
  };
};
var test = demo();

console.dir(test);

// ===========================================

// (function () {
//   var a = 50;
//   var b = 60;
//   var demo1 = function () {
//     var total = a + b;
//   };

//   console.dir(demo1);
// })();
