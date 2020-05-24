//generics 
//demo 1
//泛型Fucntion定义
function  log<T>(value:T):T {
    console.log(value);
    return value;
}
//泛型实例
log<string[]>(['info','warning'])
log(['info','warning'])

//别名
type LogT = <T>(value:T) => T
let myLog:LogT = log
myLog<string[]>(['my-info','warning'])
//泛型接口
interface ILog<T = string> {
    (value: T):T
}

let arrs:ILog<number[]> = log
arrs([1,2,3])

//demo 2
// 泛型约束
//定义一个泛型类
class Log<T> {
    //泛型不能使用static成员
    run(value:T){
        console.log(value);
        return value;
    }
}

let log2 = new Log<number>();
log2.run(1);
let log3 = new Log();
log3.run('1');

//泛型约束 预定义一个接口
interface Length{
    length:number
}
// T继承了 Length 及受到interface的约束
function logEx<T extends Length>(value:T):T{
    console.log(value, value.length);
    return value;
}
logEx([1]);
logEx("123");
logEx({length: 0});

/*
泛型的好处：
    1.函数和类可以轻松的支持多种类型，增强程序的扩展性
    2.不必写多个函数来重载，避免了冗长的联合类型声明，增强代码可读性
    3.灵活控制类型之间的约束
*/

