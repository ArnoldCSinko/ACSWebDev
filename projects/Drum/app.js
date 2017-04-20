

function PlaySound(e){
	//Searh for div with data-key = key pressed
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	//if no such div exits do nothing
	if(!key) return; 
	//Key exists add css class playing to the div
	key.classList.add("playing");
	//search for audio element based on key pressed
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	//If no such element exists do nothing
	if(!audio) return;
	//Audio element exists so force play time to zero
	audio.currentTime = 0;
	//play audio
	audio.play();
}//End of PlaySound function


function RemoveTransform(e){
	if(e.propertyName !== 'transform') return; //Ignore if not transform
	this.classList.remove("playing");
	

}//End of RemoveTransform function


window.addEventListener('keydown', PlaySound);// End of keydown event listener

const keys = document.querySelectorAll(".key");//Get elements with claas of key

/**
For each key element add an event listener for transitions and call RemoveTransform class.
**/
keys.forEach(key => key.addEventListener('transitionend', RemoveTransform));




