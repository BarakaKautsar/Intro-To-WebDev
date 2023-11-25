const rovers = ["curiosity", "opportunity", "spirit"];

function getRandomMarsPhoto() {
  const rover = rovers[Math.floor(Math.random() * rovers.length)];
  const sol = Math.floor(Math.random() * 500);
  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=jmeVosAxTwlJz7txWLibyaGVQHVQhlcwySTnKLJC`
  )
    .then((response) => response.json())
    .then((data) => displayRandomPhoto(data.photos))
    .catch((error) => console.error("Error fetching Mars photo:", error));
}

function displayRandomPhoto(photos) {
  console.log(photos);
  const photoContainer = document.getElementById("photo-container");
  const descriptionContainer = document.getElementById("description");

  // Clear previous content
  photoContainer.innerHTML = "";
  descriptionContainer.textContent = "";

  // Get a random photo
  const randomIndex = Math.floor(Math.random() * photos.length);
  const randomPhoto = photos[randomIndex];

  // Display the photo
  const photoElement = document.createElement("img");
  photoElement.src = randomPhoto.img_src;
  photoElement.alt = "Mars Photo";
  photoContainer.appendChild(photoElement);

  // Display photo description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent =
    "rover: " +
    randomPhoto.rover.name +
    "\n camera: " +
    randomPhoto.camera.full_name +
    "\n date on earth: " +
    randomPhoto.earth_date;
  descriptionContainer.appendChild(descriptionElement);
}
