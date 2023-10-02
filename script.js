const videoContainer = document.querySelector(".video-container");

function updateVideoPosition() {
  if (window.scrollY > videoContainer.offsetTop + videoContainer.offsetHeight) {
    videoContainer.classList.add("pip");
  } else {
    videoContainer.classList.remove("pip");
  }
}

window.addEventListener("scroll", updateVideoPosition);

videoContainer.addEventListener("mousedown", (e) => {
  if (e.target === videoContainer && videoContainer.classList.contains("pip")) {
    videoContainer.isDragging = true;
    e.preventDefault();
  }
});

document.addEventListener("mousemove", (e) => {
  if (videoContainer.isDragging) {
    videoContainer.style.right = window.innerWidth - e.clientX + "px";
    videoContainer.style.bottom = window.innerHeight - e.clientY + "px";
  }
});

document.addEventListener("mouseup", (e) => {
  if (videoContainer.isDragging) {
    videoContainer.isDragging = false;
  }
});
