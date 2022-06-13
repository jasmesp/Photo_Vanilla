let image1 = document.getElementById("astrodad");

image1.addEventListener("click", function () {
fullSize("astrodad")
});


let moon = document.getElementById("moon");

moon.addEventListener("click", ()=>{
    fullSize("moon")
})


function fullSize(imageID){
 let imageLocation = "/images/" + `${imageID}` + ".JPG";
 window.open(imageLocation)
 console.log(imageID, imageLocation);


}
