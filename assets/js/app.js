$(document).foundation();

var picture = document.getElementById("picture-fab");
var hoverPicture = document.getElementsByClassName("zoom");

for(var i=0; i<hoverPicture.length; i++){
	document.querySelectorAll(".zoom")[i].addEventListener("mouseover", function(){
		console.log(this.firstElementChild.src);
		picture.setAttribute("src", this.firstElementChild.src);
		picture.style.width="100%";
})

}


