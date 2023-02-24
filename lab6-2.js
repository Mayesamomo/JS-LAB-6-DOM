//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageLoaded;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageLoaded(){

	//GET DOM ELEMENTS WE'LL NEED
	var mystery_box = document.getElementById("mysteryBox");
	var button_box = document.getElementById("buttonBox");

	//general variable 
	//  var wantToSee = showConfirmationMessage();
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
// Function to show the message and check if the user wants to see something
function showConfirmationMessage() {
	var message = confirm("Do you want to see something?");
	if(message){

		mysteryBox.style.display = "none";
		buttonBox.style.display = "block";
	
		button_box.onclick= handleButtonClick;
	}

	
}


	//FUNCTION TO CHANGE buttonBox
// Function to handle the button click
function handleButtonClick() {
	// Increase the width of the Button Box to 600px, change its text, and change its background color to orange
	button_box.style.width = "600px";
	button_box.innerHTML = "<h2>SURPRISE!!<h2>";
	button_box.style.backgroundColor = "orange";
}

	//SETUP LISTENERS
mystery_box.onmouseover = showConfirmationMessage;






//END onload FUNCTION
}