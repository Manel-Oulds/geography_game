class Home {
    constructor(ele) {
      this.ele = ele;
      this.displayHome();
    }
  
    displayHome() {

      let b = document.getElementById("my_body");
      let div_buttons = document.createElement("div");
      div_buttons.classList.add("main_buttons");
      b.appendChild(div_buttons)


      
  
      let world = document.createElement("div");
      world.classList.add("bchoose");
      let world_image = document.createElement("img");
      world_image.setAttribute("src", "world_btn.png");
      world.appendChild(world_image);
      let world_button = document.createElement("button");
      world_button.classList.add("world_btn");
      world_button.innerText = "Country Guide";
      world.appendChild(world_button);
  
      div_buttons.appendChild(world);
  
      let africa = document.createElement("div");
      africa.classList.add("bchoose");
      let africa_image = document.createElement("img");
      africa_image.setAttribute("src", "africa_btn.png");
      africa.appendChild(africa_image);
      let africa_button = document.createElement("button");
      africa_button.classList.add("africa_btn");
      africa_button.innerText = "Africa Game";
      africa.appendChild(africa_button);
  
      div_buttons.appendChild(africa);
  
      let americaS = document.createElement("div");
      americaS.classList.add("bchoose");
      let americaS_image = document.createElement("img");
      americaS_image.setAttribute("src", "s_america_btn.png");
      americaS.appendChild(americaS_image);
      let americaS_button = document.createElement("button");
      americaS_button.classList.add("americaS_btn");
      americaS_button.innerText = "South America Game";
      americaS.appendChild(americaS_button);
  
      div_buttons.appendChild(americaS);
  
      let americaN = document.createElement("div");
      americaN.classList.add("bchoose");
      let americaN_image = document.createElement("img");
      americaN_image.setAttribute("src", "n_america_btn.png");
      americaN.appendChild(americaN_image);
      let americaN_button = document.createElement("button");
      americaN_button.classList.add("americaN_btn");
      americaN_button.innerText = "North America Game";
      americaN.appendChild(americaN_button);
  
      div_buttons.appendChild(americaN);
  
      let europe = document.createElement("div");
      europe.classList.add("bchoose");
      let europe_image = document.createElement("img");
      europe_image.setAttribute("src", "europe_btn.png");
      europe.appendChild(europe_image);
      let europe_button = document.createElement("button");
      europe_button.classList.add("europe_btn");
      europe_button.innerText = "Europe Game";
      europe.appendChild(europe_button);
  
      div_buttons.appendChild(europe);
  
      let oceania = document.createElement("div");
      oceania.classList.add("bchoose");
      let oceania_image = document.createElement("img");
      oceania_image.setAttribute("src", "oceania_btn.png");
      oceania.appendChild(oceania_image);
      let oceania_button = document.createElement("button");
      oceania_button.classList.add("sp_btn");
      oceania_button.innerText = "Australia & Oceania Game";
      oceania.appendChild(oceania_button);
  
      div_buttons.appendChild(oceania);
  
      let asia = document.createElement("div");
      asia.classList.add("bchoose");
      let asia_image = document.createElement("img");
      asia_image.setAttribute("src", "asia_btn.png");
      asia.appendChild(asia_image);
      let asia_button = document.createElement("button");
      asia_button.classList.add("asia_btn");
      asia_button.innerText = "Asia Game";
      asia.appendChild(asia_button);
  
      div_buttons.appendChild(asia);
    }
  }
  
  export default Home;
  