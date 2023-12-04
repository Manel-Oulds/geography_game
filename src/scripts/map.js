
class Map {
    constructor(ele) {
        this.ele = ele;
        this.displayHome();
        
    }


    playMusic(){
        // Music player
        var backgroundMusic = document.getElementById('backgroundMusic');
        var playButton = document.getElementById('play_music');
        var pauseButton = document.getElementById('pause_music');
        backgroundMusic.play();

        playButton.addEventListener('click', function() {
            backgroundMusic.play();  // Start playing the music
        });

        pauseButton.addEventListener('click', function() {
            backgroundMusic.pause();  // Pause the music
        });
    }

     fetchData() {
        
            let original = this.ele
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
        play_div.style.opacity = -1}

         
        fetch('./assets/world.svg')
        .then(response => response.text())
        .then(svgData => {
            // Add the SVG data to the DOM
            (document.getElementById("map")).innerHTML = svgData;
            let d = document.getElementById("map");
            d.className="mapC";
            // Get all the path elements representing countries
            const countries = document.querySelectorAll('path');

            //fetching flags
            let flags = {};
                
    
            countries.forEach(country => {
            fetch(`https://restcountries.com/v3.1/name/${(country.id)}?fullText=true`)
            .then(res => res.json())
            .then(data=> flags[country.id]= data[0].flags["svg"])})


            countries.forEach(country => {
                country.addEventListener("mouseover", function () {
                    let info = document.getElementById("play");
                    info.classList.add("info");
                    info.innerText=''
                    fetch(`https://restcountries.com/v3.1/name/${(country.id)}?fullText=true`)
                    .then(res => res.json())
                    .then(data=> {

                        let image = document.createElement("img")
                        image.setAttribute("src",`${flags[(country.id)]}`);
                        info.appendChild(image);
                        info.style.opacity = 1;

                        let flag = document.createElement("p"); 
                        flag.classList.add("info")
                        var languages = 
                        flag.innerText = `Common Name: ${data[0].name.common}  \n  Official Name: ${data[0].name.official}   \n  Capital: ${data[0].capital[0]}\n   Continent: ${data[0].continents}\n Language: ${Object.values(data[0].languages)}\n Population :${data[0].population}\n`;
                        
                        info.appendChild(flag);
                        
                     
                    })
                })
           
                country.addEventListener("mouseleave", function () {
                    let info = document.getElementById("play");
                    info.innerText = ''
                    info.style.opacity = -1

             })
            
            
        });
    
        })

        
    }

    displayHome(){
        this.playMusic()
        const worldButton = document.getElementById("world_btn");
        worldButton.addEventListener("click", () => {
            (document.getElementById("score_container")).style.display = "none";
            if(document.getElementById("play")) document.getElementById("play").style.opacity= -1;
           if(document.getElementsByClassName("main_buttons")[0]) (document.getElementsByClassName("main_buttons")[0]).style.display = 'none';
            this.fetchData();
        });

        const worldB = document.getElementsByClassName("world_btn");
        worldB[0].addEventListener("click", () => {
            (document.getElementById("score_container")).style.display = "none";
            (document.getElementsByClassName("main_buttons")[0]).style.display = 'none';
            document.getElementsByClassName("small-container")[0].style.display ="none";;
            this.fetchData();
        });
        
    }
    
    }
export default Map;