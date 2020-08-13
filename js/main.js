/*------Constants------*/

const nopeArr = [];
const yepArr = [];

/*------Variables ------*/

profiles = [];
newProfile = {};

/*------Cached Element References------*/

const yepBtn = document.getElementById("yep");
const nopeBtn = document.getElementById("nope");
const darkModeBtn = document.getElementById("darkMode");
const container = document.getElementById("containerDiv");
const profileName = document.querySelector("h5");
const body = document.getElementById("body");

const snap = new Audio('audio/snap.wav')

const colorScheme = {
    dark: false,
    changeColorScheme: function() {
        colorScheme.dark ? colorScheme.dark = false : colorScheme.dark = true;
        const color = colorScheme.dark ? "dark" : "";
        body.setAttribute("class", color)
    }
}

/*------Event Listeners------*/

yepBtn.addEventListener('click', ()=> {
    deleteDiv();
    getProfile();
    getProfilePic();
    render();
    snap.play()
});

nopeBtn.addEventListener('click', ()=> {
    deleteDiv();
    getProfile();
    getProfilePic();
    render();
});

darkModeBtn.addEventListener('click', colorScheme.changeColorScheme);

//listen for click on yep button that will store a profile in a "liked" folder, then reinitialize the program to send a new profile

/*------Functions------*/

checkUserColorSchemePreference()
initialize()

async function initialize() {
    await getProfile();
    await getProfilePic();
    render();
}

async function getProfile(){
    await fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        newProfile["name"] = data.results[0].name.first;
        // newProfile["city"] = data.results[0].location.city;
        newProfile["age"] = data.results[0].dob.age;
        profiles.push(newProfile);
    })
    .catch((err) => {
        console.log(err)
    })
    // return Promise.resolve()
}


async function getProfilePic (){
    await fetch("https://picsum.photos/v2/list")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        newProfile["picture"] = data[parseInt(Math.floor(Math.random() * Math.floor(30)))].download_url;
        profiles.push(newProfile);
    })
    .catch((err) => {
        console.log(err)
    })
    // return Promise.resolve();
}

function render() {
    containerDiv.innerHTML = ""
    profiles.forEach((newProfile, idx) => {
        appendDiv(newProfile["name"], newProfile["age"], idx)
        console.log(newProfile)
    })
}

function appendDiv(name, age, idx) {
        // let newDiv = document.createElement("div")
        container.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="${newProfile.picture}" class="card-img" alt="...">
                                        </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${newProfile.name}</h5>
                                        <p class="card-text">${newProfile.age} years old</p>
                                        <p class="card-text"><small class="text-muted">Last online ${Math.floor(Math.random() * Math.floor(60))} mins ago</small></p>
                                    </div>
                                        </div>
                                    </div>
                                </div>`
        // container.appendChild(newDiv)
    }

function deleteDiv(idx) {
    profiles.splice(idx, 1);
    // render();
  }

function checkUserColorSchemePreference() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      colorScheme.changeColorScheme()
    }
  }

// function yepDiv(idx
//     )