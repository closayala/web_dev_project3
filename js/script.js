function init() {
  // Add your JavaScript between these two lines of code
  if(document.body.classList.contains("google-maps")) {
    async function initMap() {
    // MORELIA MICHOACAN
    const position = {lat: 19.69991, lng: 101.18770};
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps"); //UnCaught Reference Error, google not defined.
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map
    map = new Map(document.getElementById("map"), {
      zoom: 8,
      center: position,
      mapId: "132d2c10ae6d07f5", //Unsure if this is correct syntax
    });

    // The marker
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Morelia, Michoacan",
    });
    }
    // Still need to implement extra features and photo slider...
    initMap();
  }
}

window.addEventListener("load", init);
  
if (document.querySelector(".slideshow-container")) {
  // This code is for the photo slider...
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Wrap around logic for slideIndex
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }

    // Remove active class from all dots using classList
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  
    
    // Add the "active" class to the current dot if it exists
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active");
    }
  } 
}


