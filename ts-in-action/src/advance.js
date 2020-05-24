var x = { a: 1, b: 2 };
var y = { a: 1, b: 2, c: 3 };
x = y;
function cb(handler) {
    return handler;
}
//参数个数
var handler1 = function (a) { console.log("handler1"); };
cb(handler1);
var handler3 = function (a, b, c) {
    console.log("handler3");
};
//cb(handler3) // error 
