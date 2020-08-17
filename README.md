# Plus One
A dating app matching system pulling data and profile pictures and setting them in a template to be swiped on. 

As a dating app user, and someone fascinated by multi-faceted applications coming together to form a cogent product, I was drawn to the idea of building a dating app. 

Dating apps are actually multiple applications running ascynchronously with each other to form a single program that appears synchronous. There is the initial set-up: logging in, creating a profile, and answering questions that carve out your space in the algorithm to be sent potential matches. Then, there is a matching game, which is what this project intends to be, where you are sent profiles to potential matches and you either "like" them or "pass" on them. Then, there is a messaging program that allows two users to communicate with each other. Within each of those applications are a number of features, but this project is focused on the middle step and what I think is the core UX of any dating app: liking people you like and passing on those that you don't.

Any successful dating app has a function, niche, or theme that it really focuses on. Plus One pulls on two APIs: one for finding a picture and another for pulling randomly generated data for fake people and puts them together as a dry run at API library calls coalescing in a single card that can be liked or passed on.

User selects are logged in arrays so that prior "nope" and "yep" matches can be stored, reviewed, and eventually messaged.

In 2019, 30.4 million users logged in to date online, and 25.1m of them did so from their smartphones. This project's layout has been designed with a mobile screen in mind and has media queries for cellphone, tablets, and desktops as well as a light/night mode that alternates the backgrounds of each screen. 

# User Stories:

<ul>
    <li>As a user (AAU), I expect to see a large, clearly visible photo with a few personal details when a new profile loads.</li>
    <li>AAU, I expect to be able to choose or reject a profile I see, and have the next profile load in promptly.</li>
    <li>AAU, I expect a simple and satisfying UX. I want to be able to use buzzwords like being able to have "snapped" on a profile I liked.
</ul>

# Prototype

![Check out the swiping page here](./images/Preview.png "Check out the swiping page here")

![Check out the homescreen here](.images/../images/Preview2.png "Check out the homescreen here")

# Technologies Used:

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Bootstrap</li>
</ul>

# Getting Started:

Find your plus one: (https://plus-one.surge.sh).

Upon initialization, a profile will render. By pushing the "yep" or nope" buttons, new profiles will appear that you may match with or reject.

# Next Steps and Icebox Items:

<ul>
    <li>Add Google Maps API functionality to display a match's distance from a user's declared location using modulus operator to round to the nearest mile. </li>
    <li>Add an undo button that brings back the prior profile and removes the yep/nope designation on the profile, so that users can change their mind on accidental swipes.</li>
    <li>Add a link to a messaging page to exchange messages with a profile.</li>
    <li>~~Add a "user last online" function that displays the last time a profile was online.~~</li>