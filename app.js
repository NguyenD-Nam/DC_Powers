document.getElementById('name').addEventListener("keypress", function(event){
	if(event.key === 'Enter'){
		getData(document.getElementById('name').value);
	}
});
function getVal(){
	getData(document.getElementById('name').value);
}

function getData( charname ) {
	charname.replace(' ', '_');
	var key = '3119940428329048';
	fetch('https://www.superheroapi.com/api.php/' + key + '/search/' + charname)  
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		output(data);
	});
}

window.onload = function() {
	var preloadchar = [70, 644, 720, 546, 542];
	var key1 = '3119940428329048';
	var printpreload = '<div style="width: 80%; text-align: center; font-size: 16px; margin:0 auto 4px; color: #888;">Use search box to find more DC Comics characters</div>';
	for(let i = 0; i < 5; i++){
		fetch('https://www.superheroapi.com/api.php/' + key1 + '/' + preloadchar[i])  
		.then(function(resp) { return resp.json() })
		.then(function(data) {
			printpreload += '<div class="card"><img src='+data.image.url+'><div class="info"><span class="nickname">'+data.name+' - '+data.biography["full-name"]+'</span>';
			
			if(data.powerstats.intelligence > 75)
				printpreload += '<span>Intelligence: <span class="green">'+data.powerstats.intelligence+'</span><br>';
			else if(data.powerstats.intelligence > 50 && data.powerstats.intelligence <= 75)
				printpreload += '<span>Intelligence: <span class="cyan">'+data.powerstats.intelligence+'</span><br>';
			else if(data.powerstats.intelligence > 25 && data.powerstats.intelligence <= 50)
				printpreload += '<span>Intelligence: <span class="yellow">'+data.powerstats.intelligence+'</span><br>';
			else printpreload += '<span>Intelligence: <span class="orange">'+data.powerstats.intelligence+'</span><br>';
			
			if(data.powerstats.strength > 75)
				printpreload += 'Strength: <span class="green">'+data.powerstats.strength+'</span><br>';
			else if(data.powerstats.strength > 50 && data.powerstats.strength <= 75)
				printpreload += 'Strength: <span class="cyan">'+data.powerstats.strength+'</span><br>';
			else if(data.powerstats.strength > 25 && data.powerstats.strength <= 50)
				printpreload += 'Strength: <span class="yellow">'+data.powerstats.strength+'</span><br>';
			else printpreload += 'Strength: <span class="orange">'+data.powerstats.strength+'</span><br>';
			
			if(data.powerstats.speed > 75)
				printpreload += 'Speed: <span class="green">'+data.powerstats.speed+'</span><br>';
			else if(data.powerstats.speed > 50 && data.powerstats.speed <= 75)
				printpreload += 'Speed: <span class="cyan">'+data.powerstats.speed+'</span><br>';
			else if(data.powerstats.speed > 25 && data.powerstats.speed <= 50)
				printpreload += 'Speed: <span class="yellow">'+data.powerstats.speed+'</span><br>';
			else printpreload += 'Speed: <span class="orange">'+data.powerstats.speed+'</span><br>';
			
			if(data.powerstats.durability > 75)
				printpreload += 'Durability: <span class="green">'+data.powerstats.durability+'</span><br>';
			else if(data.powerstats.durability > 50 && data.powerstats.durability <= 75)
				printpreload += 'Durability: <span class="cyan">'+data.powerstats.durability+'</span><br>';
			else if(data.powerstats.durability > 25 && data.powerstats.durability <= 50)
				printpreload += 'Durability: <span class="yellow">'+data.powerstats.durability+'</span><br>';
			else printpreload += 'Durability: <span class="orange">'+data.powerstats.durability+'</span><br>';
			
			if(data.powerstats.power > 75)
				printpreload += 'Power: <span class="green">'+data.powerstats.power+'</span><br>';
			else if(data.powerstats.power > 50 && data.powerstats.power <= 75)
				printpreload += 'Power: <span class="cyan">'+data.powerstats.power+'</span><br>';
			else if(data.powerstats.power > 25 && data.powerstats.power <= 50)
				printpreload += 'Power: <span class="yellow">'+data.powerstats.power+'</span><br>';
			else printpreload += 'Power: <span class="orange">'+data.powerstats.power+'</span><br>';
			
			if(data.powerstats.combat > 75)
				printpreload += 'Combat: <span class="green">'+data.powerstats.combat+'</span><br>';
			else if(data.powerstats.combat > 50 && data.powerstats.combat <= 75)
				printpreload += 'Combat: <span class="cyan">'+data.powerstats.combat+'</span><br>';
			else if(data.powerstats.combat > 25 && data.powerstats.combat <= 50)
				printpreload += 'Combat: <span class="yellow">'+data.powerstats.combat+'</span><br>';
			else printpreload += 'Combat: <span class="orange">'+data.powerstats.combat+'</span><br>';
			
			var more1 = data.name;
			more1.replace(' ', '-');
			var img1 = data.image.url;
			var id11 = img1.search("portraits");
			var i11 = id11 + 10;
			var i21 = id11 + 17;
			var id31 = img1.search(".jpg");
			var str11 = img1.substring(i11, i11 + 2);
			var str21 = img1.substring(i21, id31);
			printpreload += '<a target="_blank" href="' + 'https://www.superherodb.com/' + more1 + '/' + str11 + '-' + str21 +'/history/">More info <i class="fas fa-chevron-circle-right"></i></a></div></div>';
			document.getElementById('outp').innerHTML = printpreload;
		});
	}
}

function output(data){
	var size = data.results.length;
	var print = '';
	for(let i = size - 1; i >= 0; i--){
		if(
			(
				data.results[i].biography.publisher == "DC Comics" 
				|| data.results[i].biography.publisher.includes('Superman')
				|| data.results[i].biography.publisher == "Speedy"
				|| data.results[i].biography.publisher == "Spectre"
				|| data.results[i].biography.publisher == "Aztar"
				|| data.results[i].biography.publisher == "Oracle"
				|| data.results[i].biography.publisher == "Hawkfire"
				|| data.results[i].biography.publisher == "Huntress"
				|| data.results[i].biography.publisher == "Misfit"
				|| data.results[i].biography.publisher == "Spoiler"
				|| data.results[i].biography.publisher == "Nightwing"
				|| data.results[i].biography.publisher == "Black Racer"
				|| data.results[i].biography.publisher == "Speed Demon"
				|| data.results[i].biography.publisher == "Impulse"
				|| data.results[i].biography.publisher == "Flash IV"
				|| data.results[i].biography.publisher == "Batgirl III"
				|| data.results[i].biography.publisher == "Batman II"
				|| data.results[i].biography.publisher == "Robin II"
				|| data.results[i].biography.publisher == "Robin III"
				|| data.results[i].biography.publisher == "Red Robin"
				|| data.results[i].biography.publisher == "Red Hood"
			)
			&& (data.results[i].id != 124)
		)
		{
			print += '<div class="card"><img src='+data.results[i].image.url+'><div class="info"><span class="nickname">'+data.results[i].name+' - '+data.results[i].biography["full-name"]+'</span>';
			if(data.results[i].powerstats.intelligence > 75)
				print += '<span>Intelligence: <span class="green">'+data.results[i].powerstats.intelligence+'</span><br>';
			else if(data.results[i].powerstats.intelligence > 50 && data.results[i].powerstats.intelligence <= 75)
				print += '<span>Intelligence: <span class="cyan">'+data.results[i].powerstats.intelligence+'</span><br>';
			else if(data.results[i].powerstats.intelligence > 25 && data.results[i].powerstats.intelligence <= 50)
				print += '<span>Intelligence: <span class="yellow">'+data.results[i].powerstats.intelligence+'</span><br>';
			else print += '<span>Intelligence: <span class="orange">'+data.results[i].powerstats.intelligence+'</span><br>';
			
			if(data.results[i].powerstats.strength > 75)
				print += 'Strength: <span class="green">'+data.results[i].powerstats.strength+'</span><br>';
			else if(data.results[i].powerstats.strength > 50 && data.results[i].powerstats.strength <= 75)
				print += 'Strength: <span class="cyan">'+data.results[i].powerstats.strength+'</span><br>';
			else if(data.results[i].powerstats.strength > 25 && data.results[i].powerstats.strength <= 50)
				print += 'Strength: <span class="yellow">'+data.results[i].powerstats.strength+'</span><br>';
			else print += 'Strength: <span class="orange">'+data.results[i].powerstats.strength+'</span><br>';
			
			if(data.results[i].powerstats.speed > 75)
				print += 'Speed: <span class="green">'+data.results[i].powerstats.speed+'</span><br>';
			else if(data.results[i].powerstats.speed > 50 && data.results[i].powerstats.speed <= 75)
				print += 'Speed: <span class="cyan">'+data.results[i].powerstats.speed+'</span><br>';
			else if(data.results[i].powerstats.speed > 25 && data.results[i].powerstats.speed <= 50)
				print += 'Speed: <span class="yellow">'+data.results[i].powerstats.speed+'</span><br>';
			else print += 'Speed: <span class="orange">'+data.results[i].powerstats.speed+'</span><br>';
			
			if(data.results[i].powerstats.durability > 75)
				print += 'Durability: <span class="green">'+data.results[i].powerstats.durability+'</span><br>';
			else if(data.results[i].powerstats.durability > 50 && data.results[i].powerstats.durability <= 75)
				print += 'Durability: <span class="cyan">'+data.results[i].powerstats.durability+'</span><br>';
			else if(data.results[i].powerstats.durability > 25 && data.results[i].powerstats.durability <= 50)
				print += 'Durability: <span class="yellow">'+data.results[i].powerstats.durability+'</span><br>';
			else print += 'Durability: <span class="orange">'+data.results[i].powerstats.durability+'</span><br>';
			
			if(data.results[i].powerstats.power > 75)
				print += 'Power: <span class="green">'+data.results[i].powerstats.power+'</span><br>';
			else if(data.results[i].powerstats.power > 50 && data.results[i].powerstats.power <= 75)
				print += 'Power: <span class="cyan">'+data.results[i].powerstats.power+'</span><br>';
			else if(data.results[i].powerstats.power > 25 && data.results[i].powerstats.power <= 50)
				print += 'Power: <span class="yellow">'+data.results[i].powerstats.power+'</span><br>';
			else print += 'Power: <span class="orange">'+data.results[i].powerstats.power+'</span><br>';
			
			if(data.results[i].powerstats.combat > 75)
				print += 'Combat: <span class="green">'+data.results[i].powerstats.combat+'</span><br>';
			else if(data.results[i].powerstats.combat > 50 && data.results[i].powerstats.combat <= 75)
				print += 'Combat: <span class="cyan">'+data.results[i].powerstats.combat+'</span><br>';
			else if(data.results[i].powerstats.combat > 25 && data.results[i].powerstats.combat <= 50)
				print += 'Combat: <span class="yellow">'+data.results[i].powerstats.combat+'</span><br>';
			else print += 'Combat: <span class="orange">'+data.results[i].powerstats.combat+'</span><br>';
			
			var more = data.results[i].name;
			more.replace(' ', '-');
			var img = data.results[i].image.url;
			var id1 = img.search("portraits");
			var i1 = id1 + 10;
			var i2 = id1 + 17;
			var id3 = img.search(".jpg");
			var str1 = img.substring(i1, i1 + 2);
			var str2 = img.substring(i2, id3);
			print += '<a target="_blank" href="' + 'https://www.superherodb.com/' + more + '/' + str1 + '-' + str2 +'/history/">More info <i class="fas fa-chevron-circle-right"></i></a></div></div>';
		}
	}
	document.getElementById('outp').innerHTML = print;
}


var lastScrollTop;
navbar = document.getElementById('searchbar');
window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(window.innerWidth >= 1051){
	  if(scrollTop > lastScrollTop){
	    navbar.style.top='-125px';
	  }
	  else{
	    navbar.style.top='0';
	  }
	}
  lastScrollTop = scrollTop; //New Position Stored
});
