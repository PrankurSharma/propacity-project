# Propcaity Weather Dashboard
Thank you for visiting my project. This project is a part of the selection process for ReactJs Developer role at Propacity.

# Tech stack: React.js and CSS
Note: No other third party library has been used in the creation of this project. All the components have been developed from scratch.

# Folder Structure
src folder consists of 7 folders:
1. assets: The images can be kept in this folder
2. components: This folder consists of re-usable components that can be used in multiple places
3. context: This folder consists of the context file where the states are being shared across all the components
4. data: This folder consists of constant and static data being used in the project
5. features: This folder consists of all the main component features being used in this project like Topbar, MainPage
6. hooks: This folder consists of custom hooks for performing operations in the features.
7. utils: This folder consists of helper functions that can be used to perform multiple operations.

# components Folder
1. Alert.js: This file consists of re-usable alert logic for showing errors
2. Card.js: This file consists of a card like structure with title and subtitle
3. Container.js: Wrapper component for content
4. ForecastCard.js: This file consists of forecast card reuseable logic for showing forecast
5. Image.js: Custom image component for rendering images in a consistent style
6. OuterCard.js: This re-uses card component and adds another layer of image with the same making a Card with image
7. SearchBar.js: This is the search drop-down that can be re-used anywhere
8. SpanHeading.js: This is the common heading design
9. SpanSubHeading.js: This is the common sub-heading design
10. Spinner.js: This gives a loading animation
11. Text.js: Custom text component to be used across components
12. ToggleSwitch.js: This is the re-usable switch component to perform toggle operations.

# features Folder
1. Dashboard.js: Parent component of all the features
2. MainPage.js: It consists of all the info to be rendered on the main page
3. Topbar.js: It consists of topbar contents

Note: 
1. Comments have been provided wherever required across the project. 
2. Performance optimisations have been added wherever necessary with the help of lazy loading, memoisation and debouncing.
3. Assumptions: 
    - I have taken a hard-coded list for showing cities in the search bar drop-down. I have given an option to search for any other apart from the ones mentioned in the drop-down by simply typing the name and pressing enter key.
    - Pull to refresh function works when the distance pulled is greater than 100px


# Steps to run this project locally
1. Open command line and type "npm i" to install dependencies.
2. Type "npm start" to start the development server.