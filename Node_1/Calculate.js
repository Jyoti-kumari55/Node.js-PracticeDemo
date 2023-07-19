function operation(x, y, op){
    x=parseInt(x)
    y=parseInt(y)
 if(op == "add"){
     return x + y
 } else if(op == "sub"){
    return x - y;
 }else if(op == "multiply"){
    return x * y;
 }
 else if(op == "divide"){
    return x/y
 }else{
    return "Invalid Operation !!"
 }

 }
module.exports = {operation};