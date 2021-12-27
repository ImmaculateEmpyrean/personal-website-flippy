//fires the event recieved after all the images on the page finish loading 
export function allImagesOnPageLoaded(event){
    let imageTags = document.querySelectorAll('img');

    let imagesLoaded = 0;
    let totalImages = imageTags.length;    
    
    function imageLoaded(){
        imagesLoaded++
          if (imagesLoaded == totalImages) {
            event()
          }
    }

    imageTags.forEach(function(image){
        let newImage = document.createElement('img');
        newImage.addEventListener("load",imageLoaded);
        newImage.src = image.src;
    })
}