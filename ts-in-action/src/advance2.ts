enum Type{Strong,Week}
class Java {

}
class JavaScript {
    
}
function getInstance(t:Type){
    // 类型断言
    let lang = t ===Type.Strong?new Java():new JavaScript();
    //instanceof
    //in
    //
}