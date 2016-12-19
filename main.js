var texto = prompt("escribe la palabra");

function casiPalindrome (palabra) {
	var array1 = texto.split(""),
		array2 = texto.split("").reverse(),
		longitud = Math.trunc((array1.length)/2),
		cont = 0,
		cont1 = 0;
		for (var i = 0; i < longitud ; i++) {
			if (array1[i]===array2[i]) {
				cont+=1;
			}
		}
		if(cont===longitud) {
			console.log("palíndrome");
		}else if (longitud - cont <= 2 && cont >=1) {
			console.log("casiPalindrome");
		}else {
			console.log("no palíndrome");
		}
}

casiPalindrome();


// cont===longitud || (longitud - cont <= 2 && cont >=1)

// function casiPalindrome (palabra) {
// 	var array1 = texto.split(""),
// 		array2 = texto.split("").reverse(),
// 		longitud = Math.trunc((array1.length)/2),
// 		cont = 0,
// 		cont1 = 0;
// 		for (var i = 0; i < longitud ; i++) {
// 			if (array1[i]===array2[i]) {
// 				cont+=1;
// 			}else {
// 				cont1+=1;
// 			}
// 		}
// 		if (longitud - cont <= 2 && longitud - cont !=0 && longitud != cont1) {
// 			console.log("casiPalindrome");
// 		}else if(cont===longitud) {
// 			console.log("palíndrome");
// 		}else {
// 			console.log("no palíndrome");
// 		}
// }

// casiPalindrome();


// versión JC
// function cp(cad) {
//     var len = cad.length
//         i = 0,
//         j = len -1,
//         cont = 0;
 
//     while (i <= j) {
//         cont += cad[i] === cad[j]
//         i++;j--;
//     }
//     if (cont === len || (cont > 0 && len - cont > 2)) {
//         console.log('palidrome');
//     } else {
//         console.log('no es')
//     }
// }