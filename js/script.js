function init() {
  // Check if the body contains the "google-maps" class
  if (document.body.classList.contains("google-maps")) {
    async function initMap() {
      // Coordinates for Morelia, Michoacan
      const position = { lat: 19.69991, lng: -101.1877 };

      // Request the required Google Maps libraries
      try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        // Initialize the map
        const map = new Map(document.getElementById("map"), {
          zoom: 12,
          center: position,
          mapId: "16205cc47a9b60df",
        });

        // Add a marker to the map
        new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "Morelia, Michoacan",
        });
      } catch (error) {
        console.error("Error loading Google Maps libraries:", error);
      }
    }

    initMap();
  }

  // Check if the page has a photo slider container
  if (document.querySelector(".slideshow-container")) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      // Hide all slides
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // Remove "active" class from all dots
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      // Show the current slide
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        if (dots[slideIndex - 1]) {
          dots[slideIndex - 1].classList.add("active");
        }
      }
    }

    // Add event listeners for navigation buttons
    document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
    document.querySelector(".next").addEventListener("click", () => plusSlides(1));
  }
}

// Load the initialization function when the window loads
window.addEventListener("load", init);
