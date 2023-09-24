let movies = [
    {
      name: "Prey",
      des:
        "In 1719 in the Great Plains, Naru, a young Comanche woman trained as a healer, dreams of becoming a great hunter like her brother Taabe. While tracking deer she witnesses strange lights in the sky, which she believes to be spirits.",
      image: "images/prey.png"
    },
    {
      name: "Freddy",
      des:
        "Dr. Freddy Ginwala is a shy and socially awkward dentist in Mumbai. He goes on multiple dates with women, only to get rejected everytime. His only friend is his pet turtle, Hardy, and also spends his leisure time working on his miniature planes.",
      image: "images/freddy.png"
    },
    {
      name: "The Batman",
      des:
        "The Batman is a crime drama film directed by Matt Reeves and starring Robert Pattinson as Batman, a manic serial killer who seeks to expose Gotham's corruption and question his family's involvement.",
      image: "images/Batman.png"
    },
    {
      name: "Avatar: The Way of Water",
      des:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started. Jake must once again rise to the challenge and lead his people to safety.",
      image: "images/avatar.png"
    },
    {
      name: "Avengers: Endgame",
      des:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      image:
        "images/avengers.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);

//   card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
