### __User Testing__
After the site was deployed, I sent the link to family and friends to test it and received positive feedback from all. Nobody had any issues loading the page or navigating the game and its controls.

### __User Stories Testing__

| User Goal | Requirement met | Image |
| --------- | --------------- | ----- |
| As a user, I want to be able to see the site name clearly at the top of the page. | Yes | ![Logo](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/logo.png) |
| As a user, I want to be able to toggle the game's music on or off. | Yes | ![Play music](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/play-music.png) ![Stop music](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/stop-music.png) |
| As a user, I want to be able to access instructions on how to play the game and easily exit the instructions without disrupting the game. | Yes | ![Instructions](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/instructions.png) ![Instructions modal box](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/information-modal-box.png) |
| As a user, I want to be able to reset the game at any point. | Yes | ![Reset](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/reset.png) |
| As a user, I want to be able to clearly see the game and the current state (See if I'm kicking or saving and see if I scored a goal or saved a shot). | Yes | ![Game prompt for user to kick](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-1.png) ![Game prompt after user kick and score](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-2.png) ![Game prompt for user to save](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-prompt-3.png) |
| As a user, I want to be able to see the current score of the game. | Yes | ![Scoreboard during game](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/score-board-2.png) |
| As a user, I want to be able to control the game using clearly labelled buttons. | Yes | ![Game controls](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/game-controls.png) |

### __Cross-browser Testing__
After publishing the site through Github pages, I have tested it on Chrome, Firefox and Edge. The site has loaded perfectly and had no issues across all browsers.

- Chrome

![Chrome test](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/chrome.png)

- Firefox

![Firefox test](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/firefox.png)

- Edge

![Edge test](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/edge.png)

### __Compatability and Responsiveness Testing__
I have tested the site on multiple devices such as my desktop monitor, Dell 2-in-1 16" laptop, OnePlus 8t Android smartphone, Apple iPhone and Apple iPad. The site loaded and ran smoothly on all devices and content adjusted as expected for each screen size. The only issue to arise was the button text appearing blue on iPhone.

- Dell Laptop

![Laptop test](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/laptop-test.png)

- OnePlus 8t Smartphone

![Android test 1](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-1.jpg)

![Android test 2](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-2.jpg)

![Android test 3](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-3.jpg)

![Android test 4](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-4.jpg)

![Android test 5](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-5.jpg)

![Android test 6](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/android-test-6.jpg)

- Apple iPhone

![iPhone test 1](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/iphone-test-1.jpg)

![iPhone test 2](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/iphone-test-2.jpg)

- Apple iPad

![iPad test](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/ipad-test.png)

### __Validator Testing__ 

- __HTML__
    - A few errors were returned the first time my html was passed through the official [W3C Validator.](https://validator.w3.org/nu/?doc=https%3A%2F%2Fadamgilroy22.github.io%2Fstick-kick%2F)

    ![HTML validation 1](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/html-validation-before.png)

    - I tweaked the HTML to change sections with no headings to divs and ran it through again and this time no errors were returned. After discussing with my mentor, I changed the divs back to sections as despite the errors, it's better practice to use sections in this case.

    ![HTML validation 2](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/html-validation-after.png)

- __CSS__
    - No errors were returned through the official [(Jigsaw) validator.](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fadamgilroy22.github.io%2Fstick-kick%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

    ![CSS validation](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/css-validation.png)

- __JavaScript__
    - No errors were returned after passing my code through [JSHint.](https://jshint.com/)

    ![JavaScript validation 1](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/javascript-validation-1.png)

    ![JavaScript validation 2](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/javascript-validation-2.png)

### __Performance Testing__

The website was tested for performance using the Lighthouse feature in Google Chrome's Developer Tools. I was thrilled with the results as it returned 100 across the board.

![Lighthouse report](https://github.com/adamgilroy22/stick-kick/blob/main/documentation/testing/lighthouse-report.png)