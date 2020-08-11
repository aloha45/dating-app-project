/*------Constants------*/

const nopeArr = [];
const yetArr = [];

// let fetchOption = {
//     method: 'GET',
//     mode: 'no-cors',
//     cache: 'default'
//     headers: {
//         'Content-Type': 'application/json',
//       },
//   };

const profileRequest = new Request('https://randomuser.me/api/');
const profilePicRequest = new Request ('http://cors-anywhere.herokuapp.com/thispersondoesnotexist.com/image');

/*------Variables ------*/



/*------Cached Element References------*/

const yepBtn = document.getElementById("yep");
const nopeBtn = document.getElementById("nope");
const darkModeBtn = document.getElementById("darkMode");
const profilePicture = document.getElementById("profilePic");
const profileInfo = document.getElementById("profileInfo");
const container = document.getElementById("containerDiv");

/*------Event Listeners------*/

yepBtn.addEventListener('click', ()=> {
    getProfile();
    // getProfilePic();
})

nopeBtn.addEventListener('click', ()=> {
    getProfile();
    // getProfilePic();
})

darkModeBtn.addEventListener('click', ()=> {
    console.log('Dark mode engaged')
})

//listen for click on yep button that will store a profile in a "liked" folder, then reinitialize the program to send a new profile
//listen for click on nope button, that reinitializes the program to send a new profile
//listen for click on dark mode button that changes the color scheme

/*------Functions------*/

function test() {
    console.log('test')
}

function getProfile(){
    fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let newProfile = {}
        newProfile["name"] = data.results[0].name.first
        newProfile["city"] = data.results[0].location.city
        newProfile["age"] = data.results[0].dob.age
    })
    .catch((err) => {
        console.log(err)
    })
}


function getProfilePic (){
    fetch("http://thispersondoesnotexist.com")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
    render()
}

function appendDiv(quote, artist) {
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="..." class="card-img" alt="...">
                                    </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                    </div>
                                </div>
                            </div>
                            `
        container.appendChild(newDiv)
    }
//write a function that initializes the application: brings up a new profile that can be clicked on

//write a function that will return 'it's a match' occasionally when pressing the yep button, that asks if you want to send a message introducing yourself