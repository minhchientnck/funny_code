
function page(type){
	var a;
	var b;
	var m = 1000;
	var itype = type;
	switch(type) {
		case 'A':
			a = Math.pow(2,-1/4)*m;
			b = Math.pow(2,1/4)*m; 
			break;
		case 'B':
			a = 1*m;
			b = Math.sqrt(2)*m;
			break;
		case 'C':
			a = Math.pow(2,-1/8)*m;
			b = Math.pow(2,3/8)*m;
			break;
		default:
			a = Math.pow(2,-1/4)*m;
			b = Math.pow(2,1/4)*m;
			itype = 'A';
			break;
	}
	// console.log(itype + '0: ' + Math.round(a) + 'mm x ' + Math.round(b) + 'mm');
	console.log(itype + '0: ' + a + 'mm x ' + b + 'mm');
	for(var i = 1; i<=10; ++i) {
		var t = b;
		b = a;
		a = t/2;
		// console.log(itype + i +': ' + Math.round(a) + 'mm x ' + Math.round(b) + 'mm');
		console.log(itype + i +': ' + a + 'mm x ' + b + 'mm');
	}
}
console.log('Kho A');
page('A');
console.log('Kho B');
page('B');
console.log('Kho C');
page('C');

