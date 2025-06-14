function isSameType(value1, value2) {
let val1 = Number(value1);
let val2 = Number(value2);
	if(Number.isNaN(val1) && Number.isNaN(val2)){
	return true;
}
	return typeof val1 === typeof val2
} 

// do not change the code  below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2)); 