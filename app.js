function outer(inner){
	inner();
}
/*Creating an anonymous function and assigning it to variable inner*/
var inner = function(){
	console.log("Hello World from inner function");
}
/*Calling the outer function by passing a function argument*/
outer(inner);