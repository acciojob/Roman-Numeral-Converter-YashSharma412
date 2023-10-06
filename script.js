function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
	  5:['IX', 9],
      6:['V', 5], 
      7:['IV',4],
	  8:['I', 1],
    };

  //your code here
	let romanNumber = '';

	for (let i = 0; i < Object.keys(obj).length; i++) {
		const [romanChar, value] = obj[i];

		while (num>=value) {
			romanNumber += romanChar;
			num -= value;
		}
	}
	return romanNumber;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman;
