function calcTabla(x) {
	let numeros= [];
	for(i=1; i<11; i++){
		var r= parseInt(x.value)*i;
		numeros.push(r);
	}
	for(i=0; i<10; i++){
		document.getElementById("r"+i).innerHTML=numeros[i];
		document.getElementById("n"+i).innerHTML=x.value;
	}
}