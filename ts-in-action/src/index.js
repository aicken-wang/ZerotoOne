//generics 
//泛型Fucntion定义
function log(value) {
    console.log(value);
    return value;
}
//泛型实例
log(['info', 'warning']);
log(['info', 'warning']);
var myLog = log;
myLog(['my-info', 'warning']);
var arrs = log;
arrs([1, 2, 3]);
// 泛型约束
//定义一个泛型类
var Log = /** @class */ (function () {
    function Log() {
    }
    //泛型不能使用static成员
    Log.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Log;
}());
var log2 = new Log();
log2.run(1);
var log3 = new Log();
log3.run('1');
// T继承了 Length 及受到interface的约束
function logEx(value) {
    console.log(value, value.length);
    return value;
}
logEx([1]);
logEx("123");
logEx({ length: 0 });
