function fullSize(imageID) {
    let imageLocation = "/images/" + `${imageID}` + ".JPG";
    window.open(imageLocation)
    console.log(imageID, imageLocation);

}

function galleryImage(imageID, itemNumber) {
    let imageLocation = "/images/thumbnail/thumb_" + `${imageID}` + ".JPG";
    let img_src = `<figure class="galleryItem galleryItem-${itemNumber}"><img src="${imageLocation}" alt="${imageID}" class="galleryImg" onclick=fullSize("${imageID}") /> </figure>`
    // get div by id and add inner html
    let div = document.getElementById(itemNumber);
    div.innerHTML = img_src;
}

galleryImage('dense-stars', 1)
galleryImage('g1', 2)
galleryImage('dipme', 3)
galleryImage('astrodad', 4)
galleryImage('img-0155', 5)
galleryImage('img-0207', 6)
galleryImage('jastrophoto', 7)
galleryImage('moon', 8)
galleryImage('Untitled', 9)
galleryImage('camselfie', 10)
galleryImage('truck', 11)
galleryImage('lilGoose', 12)
galleryImage('g2', 13)
galleryImage('g3', 14)
galleryImage('large-bird', 15)
galleryImage('large-bird2', 16)


// <div className="gallery">
//  <figure className="galleryItem galleryItem-16">
//   <img src="images/thumbnail/thumb_dense-stars.JPG" className="galleryImg" alt="dense stars" id="12" onClick=fullSize("dense-stars") />
//  </figure>