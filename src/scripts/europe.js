class Europe {
  constructor(ele) {
    this.ele = ele;
    this.displayCountries();
    // this.fetchData();
    this.score_num = 0;
  }

  EUROPEC = [
    'Albania',
    'Andorra',
    'Austria',
    'Belarus',
    'Belgium',
    'Bosnia and Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'North Macedonia',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Ukraine',
    'United Kingdom',
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
      this.score_num+=1
      document.querySelector(".score").textContent = this.score_num;
    
      // event.target.style.backgroundImage = `url(${flagToRemove.src})`;
      // event.target.style.backgroundSize = "cover";
      let color = this.getRandomColor()
      event.target.style.fill =color
      console.log(this.score_num)
      console.log(document.querySelectorAll(".countryName"))
      flagsToRemove.forEach((el) => {
        
        
        el.style.fill = color;

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
  d.className = "eu_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');
          country.addEventListener("dragover", this.handleDragOver);
          country.addEventListener("drop", this.handleDrop.bind(this));

          if (countryName && !this.EUROPEC.includes(countryName)) {
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
      this.EUROPEC.map((country) =>
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
  

  displayCountries() {
    const europeButton = document.getElementById('europe_btn');
    europeButton.addEventListener('click', () => {
      this.score_num= 0;
      document.querySelector(".score").textContent = 0;
      (document.getElementById("score_container")).style.display = "block";
      if(document.getElementById("play")) document.getElementById("play").style.opacity= 1;

      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
      this.fetchFlags()
    });


    const europeB = document.getElementsByClassName("europe_btn");
    if (europeB.length > 0) {
    europeB[0].addEventListener('click', () => {
      this.score_num= 0;
      document.querySelector(".score").textContent = 0;
      (document.getElementById("score_container")).style.display = "block";
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    this.fetchFlags()
    });
}
   

  }
}

export default Europe;