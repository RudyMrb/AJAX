$(function(){

	let index = 0; // L'index permettra de parcourir le tableau d'image

	setInterval(function(){ // Permet d'effectuer une fonction toute les x seconde

		let image = ["http://www.baskettiamo.com/baskettiamo/wp-content/uploads/2014/01/sfondo-prova21-e1399624024267.jpg", "https://dl.kaskus.id/ncrsport.com/img/upload/nike.jpg", "http://s1.narvii.com/image/wmyzke2u5qawrkh6ddomku6saaafdk2b_hq.jpg"]; // Varible qui stocke nos images

		if(index == image.length) // Condition pour revenir à la premiere image
			index = 0;

		$("#slider-Mike").attr("src", image[index]); // Modifier la source de l'image

		index++;


	}, 3000);




	let tableau = ["toto", "tata", "titi"];
	let objet = {"truc":"much", "zaza":1};

	console.log(tableau);
	console.info(objet);







})
