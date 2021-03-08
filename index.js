class TextCase {
	constructor() {
		console.log('ter panggil');
	}
	dot(str) {
		console.log(str.split(' ').join('.'));
	}
	snake(str) {
		console.log(str.split(' ').join('_'));
	}
	upper(str) {
		console.log(str.toUpperCase());
	}
	no(str) {
		console.log(str);
	}
	lower(str){
	  console.log(str.toLowerCase())
	}
	path(str){
	  console.log(str.split(' ').join('/'))
	}
	param(str){
	  console.log(str.split(' ').join('-'))
	}
	reverses(str){
	  console.log(str.split('').reverse().join(''))
	}
	lowerfirst(str){
	  console.log(str[0].toLowerCase() + str.slice(1).toUpperCase())
	}
	upperfirst(str){
	  console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())
	}
	constanta(str){
	  str = str.split(' ').join('_').toUpperCase()
	  console.log(str)
	}
	swap(str){
	  let result = "";
    for (let i = 0; i < str.length; i++) {
      const lower = str[i].toLowerCase();
      result += str[i] === lower ? str[i].toUpperCase() : lower;
    }
    return result;
	}
	islowercase(str){
	  return str.toLowerCase() === str && str.toUpperCase() !== str
	}
	isuppercase(str){
	  return str.toUpperCase() === str && str.toLowerCase() !== str
	}
	sentence(str){
	  str = str[0].toUpperCase() + str.slice(1)
	  console.log(str)
	}
}
const textcase = new TextCase();
console.log("s  a  t  o  r")
textcase.reverses("o  p  e  r  a")
console.log("t  e  n  e  t")
console.log("o  p  e  r  a")
textcase.reverses("s  a  t  o  r")