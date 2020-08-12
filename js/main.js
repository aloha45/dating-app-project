/*------Constants------*/

const nopeArr = [];
const yepArr = [];

const minutes = Math.floor(Math.random() * Math.floor(60))

/*------Variables ------*/

profiles = [];
newProfile = {};

/*------Cached Element References------*/

const yepBtn = document.getElementById("yep");
const nopeBtn = document.getElementById("nope");
const darkModeBtn = document.getElementById("darkMode");
const profilePicture = document.getElementById("profilePic");
const profileInfo = document.getElementById("profileInfo");
const container = document.getElementById("containerDiv");

const profileName = document.querySelector("h5")

/*------Event Listeners------*/

yepBtn.addEventListener('click', ()=> {
    getProfile();
    getProfilePic();
    appendDiv();
})

nopeBtn.addEventListener('click', ()=> {
    getProfile();
    getProfilePic();
    appendDiv();
})

darkModeBtn.addEventListener('click', ()=> {
    console.log('Dark mode engaged')
})

//listen for click on yep button that will store a profile in a "liked" folder, then reinitialize the program to send a new profile
//listen for click on dark mode button that changes the color scheme

/*------Functions------*/

initialize()

function test() {
    console.log('test')
}

function initialize() {
    getProfile();
    getProfilePic();
    appendDiv();
    render();
}

function getProfile(){
    deleteDiv()
    fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        newProfile["name"] = data.results[0].name.first;
        // newProfile["city"] = data.results[0].location.city;
        newProfile["age"] = data.results[0].dob.age;
        profiles.push(newProfile);
        render();
    })
    .catch((err) => {
        console.log(err)
    })
}


function getProfilePic (){
    deleteDiv()
    fetch("https://picsum.photos/v2/list")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        newProfile["picture"] = data[parseInt(Math.floor(Math.random() * Math.floor(30)))].download_url;
        profiles.push(newProfile);
    })
    render()
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
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="${newProfile.picture}" class="card-img" alt="...">
                                        </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${newProfile.name}</h5>
                                        <p class="card-text">${newProfile.age} years old</p>
                                        <p class="card-text"><small class="text-muted">Last online ${minutes} mins ago</small></p>
                                    </div>
                                        </div>
                                    </div>
                                </div>`
        container.appendChild(newDiv)
    }

function deleteDiv(idx) {
    profiles.splice(idx, 1);
    render()
  }

// function yepDiv(idx
//     )