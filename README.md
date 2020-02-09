# LIVE URL : https://casaone-rule-manager.herokuapp.com/

# To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser

# Highlights
- Have used CONTEXT-API for the state management.
- Only one single parent compenent is class based component and the rest are functional components. 
- All functional components access the state using useContext hooks
- The design is responsive.
- Have used scss and it's features like extend, variables, partials etc
- All array operations are performed in '/src/utils.js' file and are named exported
- Have selected dark theme for better look and comfort

#Features
- The game board has 8x8 squares (initially, all represented by question marks)
- There are 8 diamonds hidden on the board, each diamond behind one of the squares
- When the user clicks on a square, if the square was hiding a diamond, the diamond appears Otherwise, the square is opened, and blank
- When the user clicks on a square, if the square was not a diamond, then an arrow appears, pointing towards the nearest diamond. 
- Any arrows that were previously show become hidden
- The game ends when all diamonds are found. The user's score is the number of squares still left unturned.
- In the end Final score is shown in the modal and user can restart the game. 
- While the game is in progress, the total clicks and total diamonds won are shown the side panel. 
- User can click on reset button to reset and restart the game
# NOTE: 
- This project could have also been done using redux or usual state/setState/props methods. I have good understanding of both the concepts.
-  