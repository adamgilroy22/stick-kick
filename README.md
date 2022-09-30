# __Stick Kick - Portfolio Project 2__
This is a website for Stick Kick, a penalty kick game where users compete against the computer in a game of chance alternating between kicking and saving with the first to 5 goals winning.

The aim of this project is to build an interactive front-end site which responds to the user's actions and altering the way the site displays information to achieve the user's goals.

[Live link to website](https://adamgilroy22.github.io/stick-kick/)

![Website mockup](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/mockup.png)

## __UX & Design__
As the site is a single-serving site, there is only one page. I opted to keep the design of the page simple and clean so as it doesn't distract from the main game section of the page.

### __User Stories__
- As a user, I want to be able to see the site name clearly at the top of the page.
- As a user, I want to be able to toggle the game's music on or off.
- As a user, I want to be able to access instructions on how to play the game and easily exit the instructions without disrupting the game.
- As a user, I want to be able to reset the game at any point.
- As a user, I want to be able to clearly see the game and the current state (See if I'm kicking or saving and see if I scored a goal or saved a shot).
- As a user, I want to be able to see the current score of the game.
- As a user, I want to be able to control the game using clearly labelled buttons.

### __Wireframes__
Before writing any code, I used Balsamiq to create wireframes for the page.

![Homepage wireframe](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/wireframes/homepage-wireframe.png)

![Information modal box wireframe](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/wireframes/modal-box-wireframe.png)


### __Colour Scheme__
I used [Coolors.co](https://coolors.co/000000-fafafa-008037-03989e-737373-004aad-ff1616) to choose a colour scheme that would make the site content look simple and make the game images look like a soccer pitch with both the user and computer players easily distinguishable.

![Colour Scheme](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/colour-scheme.png)

### __Typography__
I used [Google Fonts](https://fonts.google.com/) to select and import the Mali font for all site text.

![Mali font](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/mali.png)

## __Features__ 

- __Logo__
    - The logo appears at the top of the page and shows the user the name of the game.
    
    ![Logo](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/logo.png)

- __Favicon__
    - The favicon on the browser tab contains a simple picture of a stick man kicking a football and shows the user what the game is about.
    
![Favicon](https://github.com/adamgilroy22/stick-kick/blob/main/assets/images/favicon/favicon.png)

- __Game Settings Buttons__
    - The game settings buttons allow the user to control music, view instructions, and reset the game.

![Game settings buttons](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-settings-buttons.png)
    
- __Play/Stop Music__
    - The music control button allows the user to toggle the game's music. The music is off by default and the text on the button changes depending if the music is muted or not.

![Play music](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/play-music.png)

![Stop music](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/stop-music.png)

- __Instructions__
     - The instructions button allows the user to see the game rules and instructions on how to play.

![Instructions](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/instructions.png)

- __Reset__
    - The reset button allows the user to reset the game at any point while playing.

![Reset](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/reset.png)

- __Instructions Modal Box__
    - The instructions modal box appears when the user clicks on the instructions button and gives the user a rundown on the game's rules and controls. The box can be closed by either clicking the "Play Game" button at the bottom or clicking anywhere outside of the box without disrupting the game.
    
    ![Instructions modal box](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/information-modal-box.png)

- __Game Image Area__
    - The game image area gives the user a visual representation of the current game state. After both the user and computer directions have been logged, the image displays both the ball direction and the goalkeeper direction for a few seconds before showing whoever is next up to kick and save.
    
    ![Game image area states](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-states.gif)

- __Scoreboard__
    - The scoreboard displays the current score of the game clearly indicating the user's and computer's score.
    
    ![Scoreboard at start](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/score-board-1.png)
    
    ![Scoreboard during game](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/score-board-2.png)

- __Game Prompts__
    - The game prompt area lets the user know if they are kicking or saving. Once the user selects their direction with the control buttons, it prints both the user's and computer's choices along with if it's a goal or a save. Once either the user or computer reaches 5 goals, it displays the winner.
    
    ![Game prompt for user to kick](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-1.png)
    
    ![Game prompt after user kick and score](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-2.png)
    
    ![Game prompt for user to save](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-3.png)
    
    ![Game prompt at end of game showing user win](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-4.png)

- __Game Controls__
    - The game control buttons allows the user to choose either left, middle, or right when both kicking and saving.
    
    ![Game controls](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-controls.png)

- __Footer__
    - The footer displays that I developed the site, a link to my Github that opens in a new tab, along with the project the page is for.
    
    ![Footer](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/footer.png)

### __Features Left to Implement__
- __More Direction Options__
    - I plan to add extra options to the controls which allows the user to choose top-left, top-middle, top-right, bottom-left, bottom-middle, and bottom-right.

- __More Realistic Outcomes__
    - I plan to tweak the game's logic to make it more true to a real life penalty shootout where it begins as a best out of 5 and if both sides are level after 5 kicks then it goes to sudden-death.

- __Custom Characters__
    - I plan to add customization to the characters so the player can choose what colour both their character and the computer's character are.

### __Technologies Used__
The following is a list of the technologies I used on this project.
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML5 was used to create the structure of the site.
- [CSS3](https://en.wikipedia.org/wiki/CSS)
    - CSS3 was used to add styling to the site.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - JavaScript was used to add functionality to the game.
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the Mali font for use on styles.css.
- [Github](https://github.com/)
    - Github was used to store the project's code after being pushed from Git.
- [Gitpod](https://gitpod.io/)
    - Gitpod terminal was used to commit my code using Git and push it to Github.
- [Git](https://git-scm.com/)
    - Git was used for version control through the Gitpod terminal.
- [Canva](https://www.canva.com/)
    - Canva was used to design the game images and the favicon.
- [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to design the wireframes for the project.
- [Techsini](http://techsini.com/multi-mockup/index.php)
    - Techsini was used to generate mockups for the project.

## __Testing__

View testing [here.](TESTING.md)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/adamgilroy22/stick-kick), navigate to the Settings tab. 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here.](https://adamgilroy22.github.io/stick-kick/)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/adamgilroy22/stick-kick.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/adamgilroy22/stick-kick)

## __Credits__

### __Code__

- Code for the ability to toggle music was inspired by [FreeCodeCamp.](https://forum.freecodecamp.org/t/how-to-play-mp3-in-the-background-music-automatically/308554)

### __Content__

- All website text content was created and written by me.
- The Mali font used on the site was imported from [Google Fonts.](https://fonts.google.com/)

### __Design__

- Wireframes were made using [Balsamiq.](https://balsamiq.com/)
- Colours were chosen and checked for readability through [Webaim.](https://webaim.org/resources/contrastchecker/)

### __Media__

- Game images and Favicon were designed by me with [Canva.](https://www.canva.com/)
- Background music is from BBC's Match of the Day and mp3 was downloaded from [YouTube.](https://www.youtube.com/watch?v=V1VscTjwlco&ab_channel=SportsTVThemeTunes)

## __Acknowledgements__

I would like to give special thanks to my mentor, [Time Nelson](https://www.linkedin.com/in/travel-tim-nelson/) for his guidance during the development of this project.