//You have an array of value like so:
var values = [5, 8, 0, 10];

//What is the maximum value of this arary, but the catch is that you can't sum up contiguous values. For instance: You can't do 5 + 8, becausethey sit next to each other You can do 8 and 10 though, which is 18.

//to solve this, you'll do something seemingly strange, and that's iterate across each value, while keeping track of what the max total could be, and then once you're at the end the last element of the array will be the max total of the values.

//so step 1 is make this new array with the first two values
var max = [values[0], values[1]];
//-> [5,8];

//now for item 3 (index 2) of max, the value we put in here can be one of the following:
//1. It could be the number at values[2] (which is 0) PLUS the number 5, which is values[0], 5 + 0 = 5;
//2. Or it could be just the number at values[1], which is 8. The reason it can only be just this value is that you could not add 8 and 0, they sit next to each other.
max[2] = (values[2] + max[0] > values[1]) ? values[2] + max[0] : values[1];

//repeat this logic for houses[3]...
max[3] = (values[3] + max[1] > values[2]) ? values[3] + max[1] : values[2];

console.log(max);

function max_value(arr) {
	var max = [arr[0], arr[1]];
	for (var i = 2; i < arr.length; i++) {
		max[i] = (arr[i] + max[i-2] > arr[i-1] ? arr[i] + max[i-2] : arr[i-1]);
	}
	return max;
}

console.log(max_value(values));

console.log(max_value([1,5]));
console.log(max_value([1,0,0,0,19,10]))