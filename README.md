** IMPORTANT **
Make sure to install node.js to ensure you're able to run this project
  https://nodejs.org/en/
  
After you clone from GitHub,

1. navigate to the ~/Chicago-Sense folder

2. Run the following command (to install all the stuff we need):
  $ npm install 

3. To run entire site:
  $ npm start

4. Since #3's command only starts at index.html, to test each individual HTML file,
either
  a. install live reload on VSCode (visual studio code) and open HTML file with it and run the following command:
    $ npm run watch
OR
  b. open individual HTML file in browser and run the same command above (you'll have to refresh the page every time you edit any file though) /:

Advice for devs:

1. If you want to make an HTML page, add it in the ./dist folder.
  - There is a boilerplate HTML file you can copy from!
  - There should be ONLY 1 <script> tag per HTML file. Ask me (Will) if you're having trouble deciding what to put as the src attribute.

2. If you want to add a new JS file, add it in the ./src folder.
  - Make sure to import all the stuff you'll need. 
  - Look at the index.js file for a good example.

3. If you want to add a new CSS file, add it in the ./src/css folder.
  - Don't forget to import it in the appropriate JS file.