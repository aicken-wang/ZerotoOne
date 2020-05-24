interface A{
    a:any;
    b:any;
}
interface B {
    a:any;
    b:any;
    c:any;
}


let x:A = {a:1,b:2}
let y:B = {a:1,b:2,c:3}
x = y;
//y =x; // error
//函数兼容性
type Handler = (a:number, b:number) => void
function cb(handler:Handler) {
    return handler;
}

//参数个数
let handler1 = (a:number) => { console.log("handler1")}
cb(handler1)
let handler3 = (a:number,b:number,c:number) => {
    console.log("handler3")
}
//cb(handler3) // error 


//可选参数和剩余参数

let a = (p1:number, p2:number) => {}
//可选参数
let b = (p1?:number,p2?:number) =>{}
//剩余参数
let c = (...args:number[]) =>{}
a = b;
a = c;
//  strictFunctionTypes = false 不会校验
// b = c;
// b = a;
c = a;
c = b;

// 参数类型
let handlerstr= (a:string) => {}
//cb(handlerstr)

interface Point3D{
    x:number;
    y:number;
    z:number;
}

interface Point2D{
    x:number;
    y:number;
}
let p3d = (p:Point3D) =>{}
let p2d = (p:Point2D) =>{}
//成员个数多的兼容成员个数少的；
//接口是方法个数少的兼容方法个数多的

//返回值类型
let f= ()=>({name:'WANG'})
let g=()=>({name:'WANG',city:'ShenZhen'})
f = g;
//g = f;
//函数重载参数和返回值一致
function overload(a:number,b:number):number;
function overload(a:string,b:string):string;
function overload(a:any,b:any):any{}
//枚举兼容，枚举之间是不兼容的，枚举与数值是完全兼容的
enum Fruit{
    Apple,
    Banana
}
let fruit:Fruit.Apple = 1;
let num:number = Fruit.Apple;

//类的兼容性,只比较结构，静态函数和构造函数是不参与比较的,私有成员只有父类和子类可以兼容
class X{
    constructor(x:number){}
    id:number=1;
    private p:number =2;
}
class XY{
    private p:number =1;
    static s = 1;
    constructor(x:number,y:number){}
    id:number=2;
}
let xx = new X(1);
let yy = new XY(1,2);
// xx == yy;
// yy ==xx;

class CXY extends XY{}
let cxy = new CXY(1,3)
cxy = yy;
// 泛型兼容，只有泛型类型使用才不兼容
interface Empty<T> {
    value:T
}

// let obj11:Empty<number> = {}
// let obj22:Empty<string> = {}
//泛型函数
let log11 = <T>(x:T):T=>{
    return x;
}
let log22 = <U>(x:U):U=>{
    return x;
}
log11 = log22;
/*
结构之间比较，成员少的兼容成员多的，
函数之间比较，参数多的兼容参数少的  
*/