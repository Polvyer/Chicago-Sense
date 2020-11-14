** IMPORTANT **

Make sure to install node.js to ensure you're able to run this project:

  https://nodejs.org/en/
  
After you clone from GitHub,

1. Navigate to the ~/Chicago-Sense folder

2. Run the following command (to install all the imports we need):

        $ npm install 

3. Run this command as well, (to see the entire app on your browser):

        $ npm start
  
-- More Information --

4. Since [3.]'s command starts at index.html, in order to test each individual HTML file, you can either:

    a. Install the live server extension on VSCode (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and open the specific HTML file you want to test with the extension and run the following command:
  
        $ npm run watch
    
    OR

    b. Open the specific HTML file manually (by opening it with your browser) and run the same command shown above (you'll have to refresh the page every time you edit any file though)

-- Advice --

1. If you want to add a new HTML file, add it in the ~/src/public folder AS WELL as in the webpack.config.js file under a new HTMLWebpackPlugin(...)
  - There is a boilerplate HTML file you can copy from if you need guidance on structuring your HTML file.
  - Don't include any <script> tags in the HTML files in the ~/public folder, since webpack will do that for us.
  - If you're confused by any of this, please consult me [Will].

2. If you want to add a new JS file, add it in the ~/src folder.
  - Make sure to import all the stuff you'll need. 
  - Look at the boilerplate.js file for a good template.

3. If you want to add a new CSS file, add it in the ~/src/css folder.
  - Don't forget to import it into the appropriate JS file.
  - You can also make a scss file under the ~/src/scss folder if you know any SASS (don't forget to import this as well).
