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
}
const textcase = new TextCase();
textcase.dot('bruh ga bisa');
textcase.snake('hey hey what');
textcase.upper('g');
textcase.no('bidhxnd duhdhd jdGjd');
textcase.upper('gygfftfg');
textcase.lower("G")