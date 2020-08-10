/*------Constants------*/

const nopeArr = [];
const yetArr = [];

let fetchOption = {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  };

const profileRequest = new Request('https://pipl.ir/v1/getPerson');
const profilePicRequet = new Request ('http://thispersondoesnotexist.com/image');

/*------Variables ------*/



/*------Cached Element References------*/

const yepBtn = document.getElementById("yep");
const nopeBtn = document.getElementById("nope");
const darkModeBtn = document.getElementById("darkMode");

//div id profilePic
//div id profileInfo

/*------Event Listeners------*/

yepBtn.addEventListener('click', ()=> {
    getProfile();
    getProfilePic();
})

nopeBtn.addEventListener('click', ()=> {
    getProfile();
    getProfilePic();
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
    console.log('fetching profile...')
    fetch(profileRequest, fetchOption)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

function getProfilePic (){
    console.log('fetching profile pic...')
    fetch(profilePicRequet, fetchOption)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

//write a function that initializes the application: brings up a new profile that can be clicked on

//write a function that will return 'it's a match' occasionally when pressing the yep button, that asks if you want to send a message introducing yourself.