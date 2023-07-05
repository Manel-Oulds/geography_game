import Swal from 'sweetalert2'
class Asia {
  constructor(ele) {
    this.ele = ele;
    this.displayCountries();
    // this.fetchData();
    this.score_num=0;
     this.seconds = 60;
  }

  startTimer() {
    const Swal = require('sweetalert2')
   
    let timer = document.getElementById("timer");
    timer.textContent = `Time left: ${this.seconds}`
    let timerId = setInterval(() => {
     if (this.seconds=== 0) {
        clearInterval(timerId);
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text: `Your Score is :  ${this.score_num} !`,
          confirmButtonText: '<a href="./index.html">OK!</a>'
        })
      }else{
        this.seconds--;
      timer.textContent =`Time left: ${this.seconds}` ;
      if(this.seconds<=10){
        timer.style.color="red"
      }
      }
      
  
      
      // Add event listeners to stop buttons

    const stopButtons = document.getElementsByClassName("bchoose");
    for (let i = 0; i < stopButtons.length; i++) {
      stopButtons[i].addEventListener("click", () => {
        clearInterval(timerId);
    });
}
    }, 1000);
  }

  ASIAC = [
    'Afghanistan',
    'Armenia',
    'Azerbaijan',
    'Bahrain',
    'Bangladesh',
    'Bhutan',
    'Brunei',
    'Cambodia',
    'China',
    'Cyprus',
    'Georgia',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Israel',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Lebanon',
    'Malaysia',
    'Maldives',
    'Mongolia',
    'Myanmar',
    'Nepal',
    'North Korea',
    'Oman',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Qatar',
    'Russia',
    'Saudi Arabia',
    'Singapore',
    'South Korea',
    'Sri Lanka',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Turkey',
    'Turkmenistan',
    'United Arab Emirates',
    'Uzbekistan',
    'Vietnam',
    'Yemen'
  ];


  // Function to handle drag start
  handleDragStart(event) {
    // debugger
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  // Function to handle drag over country
  handleDragOver(event) {
    event.preventDefault();
  }


  fillFlag(country,countryName,flagToRemove){

    var svgns = "http://www.w3.org/2000/svg";

    let svgs = document.getElementById("allSvg")
    let my_defs = document.createElementNS(svgns,"defs")
    svgs.appendChild(my_defs)
    let my_pattern = document.createElementNS(svgns,"pattern")
    let c = countryName.split(" ").join("")
    my_pattern.setAttribute("id", `background_${c}`)
    my_pattern.setAttribute("patternContentUnits","objectBoundingBox")
    my_pattern.setAttribute("width", "100%")
    my_pattern.setAttribute("height", "100%")
    my_defs.appendChild(my_pattern)
    let my_flag = document.createElementNS(svgns,"image");
    my_flag.setAttribute("href", `${flagToRemove.src}`);
    my_flag.setAttribute("x", "0")
    my_flag.setAttribute("y", "0")
    my_flag.setAttribute("object-fit", "cover");
    my_flag.setAttribute("width", "1")
    my_flag.setAttribute("height", "1")
    my_flag.setAttribute("preserveAspectRatio", "none" );
    my_pattern.appendChild(my_flag)

    country.setAttribute("fill",`url(#background_${c})`)

  }

  // Function to handle drop on country
  handleDrop(event) {
    event.preventDefault();
  
    const flagId = event.dataTransfer.getData("text/plain");
    const flag = document.getElementById(flagId);
    const countryName = event.target.id;
    const playDiv = document.querySelector("#play");
    const flagsToRemove = document.querySelectorAll(`#${countryName.replace(/ /g, "\\ ")}`);
    const flagToRemove = playDiv.querySelector(`#${countryName.replace(/ /g, "\\ ")}`);
    // Check if dropped flag matches the country
    if (flag.id === countryName) {
      event.target.appendChild(flagToRemove);
  
      // let color = this.getRandomColor()
      // event.target.style.fill =color;

      this.fillFlag(event.target,countryName,flagToRemove)
      
      if(this.seconds> 0) this.score_num+=1;
      flagsToRemove.forEach((el) => {
          this.fillFlag(el,countryName,flagToRemove);
        // el.style.fill = color;
       
      document.querySelector(".score").textContent = this.score_num;
      });
    }
    

    // playDiv.removeChild(flagToRemove);
    
      
     else {
      // Reset flag position if not correct
      flag.style.left = "0";
      flag.style.top = "0";
    }
  }


  getRandomColor() {
    // Generate random values for RGB components
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Construct the color string in the RGB format
    const color = `rgb(${r}, ${g}, ${b})`;
  
    return color;
  }
  fetchData() {

    if (!document.getElementById("my_div")){
      let my_div = document.createElement("div");
      my_div.setAttribute("id","my_div");
      (document.getElementById("container")).appendChild(my_div);
      let map = document.createElement("div");
      map.setAttribute("id","map")
      my_div.appendChild(map);
     }


  if (!document.getElementById("play")){
  let play_div = document.createElement("div");
  play_div.setAttribute("id","play");
  (document.getElementById("container")).appendChild(play_div);
 }


  const d = document.getElementById("map");
  d.className = "as_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        // Hide non-European countries
        

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');
          country.addEventListener("dragover", this.handleDragOver);
          country.addEventListener("drop", this.handleDrop.bind(this));

          if (countryName && !this.ASIAC.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  fetchFlags() {
    // Fetch Flags
    let flags = {};
  
    // Utiliser Promise.all pour attendre que toutes les requêtes fetch soient terminées
    Promise.all(
      this.ASIAC.map((country) =>
      fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.flags?.svg) {
          flags[country] = {
            country: country,
            flag: data[0].flags.svg,
          };
        }
      })
  )
).then(() => {
  const playDiv = document.getElementById("play");
  playDiv.innerHTML = "";
  playDiv.style.display = "block";

  // Shuffle the flags
  const shuffledFlags = this.shuffleFlags(flags);

  // Display all shuffled flags in the play_div element
  for (const flagKey in shuffledFlags) {
    const flag = shuffledFlags[flagKey];
    const flagImg = document.createElement("img");
    flagImg.setAttribute("src", flag.flag);
    flagImg.setAttribute("id", flag.country);
    flagImg.setAttribute("draggable", true);
    flagImg.addEventListener("dragstart", this.handleDragStart);
    playDiv.appendChild(flagImg);
  }
});
}

shuffleFlags(flags) {
const shuffledFlags = {};
const flagKeys = Object.keys(flags);

// Fisher-Yates shuffle algorithm
for (let i = flagKeys.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [flagKeys[i], flagKeys[j]] = [flagKeys[j], flagKeys[i]];
}

// Create a new object with shuffled flags
flagKeys.forEach((key) => {
  shuffledFlags[key] = flags[key];
});

return shuffledFlags;
}



startGame(original){
  Swal.fire({
    icon: 'info',
    title: 'Drag the flag to the corresponding country in Asia',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Start Game',
  }).then((result) => {
    if (result.isConfirmed) {
      original.startTimer();
      original.score_num = 0;
      document.querySelector(".score").textContent = 0;
      document.getElementById("score_container").style.display = "block";
      if (document.getElementById("play"))
        document.getElementById("play").style.opacity = 1;
      document.getElementsByClassName("main_buttons")[0].style.display ="none";
      original.fetchFlags();
      original.fetchData();
    } 
  })

}

  displayCountries() {
    let original = this;
    const asiaButton = document.getElementById('asia_btn');
    asiaButton.addEventListener("click", function() {
      original.startGame(original);
    });


    const asiaB = document.getElementsByClassName("asia_btn");
   
    asiaB[0].addEventListener("click", function() {
      original.startGame(original);
    });
}
   

  }


export default Asia;


