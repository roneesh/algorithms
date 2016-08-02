// write a recursive function that runs for just one second
// count the number of iterations
// to run this, you'll have to run the program with:
// node --stack_size=2000 just_one_second.js

function just_one_second(time, count) {
	count++;
	console.log(count);
	var time = time || (new Date().getTime() + 1000);
	if (new Date().getTime() > time) {
		return;
	} else {
		just_one_second(time, count);
	}
}

just_one_second(null, 0);