/*------Constants------*/

const nopeArr = [];
const yepArr = [];

const colorScheme = {
    dark: false,
    changeColorScheme: function() {
        colorScheme.dark ? colorScheme.dark = false : colorScheme.dark = true;
        const color = colorScheme.dark ? "dark" : "";
        body.setAttribute("class", color)
    }
}


/*------Variables ------*/

profiles = [];
newProfile = {};

/*------Cached Element References------*/

const yepBtn = document.getElementById("yep");
const nopeBtn = document.getElementById("nope");
const darkModeBtn = document.getElementById("darkMode");
const container = document.getElementById("containerDiv");
const body = document.getElementById("body");

const click = new Audio('audio/click.wav')
const snap = new Audio('audio/snap.wav')

/*------Event Listeners------*/

yepBtn.addEventListener('click', ()=> {
    yepDiv();
    getProfile();
    getProfilePic();
    render();
    snap.play()
});

nopeBtn.addEventListener('click', ()=> {
    nopeDiv();
    getProfile();
    getProfilePic();
    render();
    click.play()
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
        newProfile["city"] = data.results[0].location.city;
        newProfile["age"] = data.results[0].dob.age;
        profiles.push(newProfile);
    })
    .catch((err) => {
        console.log(err)
    })
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
}

function render() {
    containerDiv.innerHTML = ""
    profiles.forEach((newProfile, idx) => {
        appendDiv(newProfile["name"], newProfile["age"], idx)
    })
}

function appendDiv(name, age, idx) {
        container.innerHTML = `<div class="card mb-3" id="containerCard" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="${newProfile.picture}" class="card-img" alt="...">
                                        </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">${newProfile.name}</h3>
                                        <h6 class="card-text">${newProfile.city}</h6>
                                        <p class="card-text">${newProfile.age} years old</p>
                                        <p class="card-text"><small class="text-muted">Last online ${Math.floor(Math.random() * Math.floor(60))} mins ago</small></p>
                                    </div>
                                        </div>
                                    </div>
                                </div>`
}

function yepDiv(){
    let yes = profiles.shift();
    yepArr.push(yes);
}

function nopeDiv(idx){
    let no = profiles.shift();
    nopeArr.push(no);
}

function checkUserColorSchemePreference() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      colorScheme.changeColorScheme()
    }
}