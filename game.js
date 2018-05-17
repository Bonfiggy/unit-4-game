$(document).ready(function() {



	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 


	var crystalOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + crystalOne); 
		$("#pic1").html("<img src=" + "assets/images/red.png" + " value=" + crystalOne + ">"); 

	var crystalTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + crystalTwo); 
		$("#pic2").html("<img src=" + "assets/images/blue.png" + " value=" + crystalTwo + ">"); 

	var crystalThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + crystalThree); 
		$("#pic3").html("<img src=" + "assets/images/yellow.png" + " value=" + crystalThree + ">");
	
	var crystalFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + crystalFour); 
		$("#pic4").html("<img src=" + "assets/images/green.png" + " value=" + crystalFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		crystalOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + crystalOne); 
		$("#pic1").html("<img src=" + "assets/images/red.png" + " value=" + crystalOne + ">"); 

		crystalTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + crystalTwo); 
		$("#pic2").html("<img src=" + "assets/images/blue.png" + " value=" + crystalTwo + ">"); 

		crystalThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + crystalThree); 
		$("#pic3").html("<img src=" + "assets/images/yellow.png" + " value=" + crystalThree + ">");
	
		crystalFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + crystalFour); 
		$("#pic4").html("<img src=" + "assets/images/green.png" + " value=" + crystalFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
