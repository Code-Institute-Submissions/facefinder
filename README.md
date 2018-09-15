[![Build Status](https://travis-ci.org/90t/facefinder.svg?branch=master)](https://travis-ci.org/90t/facefinder)
# FaceFinder
 Clive Noonan , Full Stack Student In CODE INSTITUTE

- I am currently a student at the Code Institute Studing Full Stack Diploma in Software Development. 
- This is the third of five projects which I must complete in order to be awarded the globally recognised Diploma 
- from Edinburgh Napier University. This Project utilises The Front End Technology React.js the postgress SQL query Language
- & the exspress middleware  technology .

- This project is based on a Image Recognition  Machine learning API , it utlilises the clarifaiAPI,
- the inspiration for this application came from many years  when I first saw the clarifaiAPI been advertised ,
- I was amazed at the power & potentiol of this technology,
- its great that I get the chance to focus my new found knowledge on a idea I was so interested in.

- It uses the postgres database which is still one of the most popular & wildly used for development ,
- coupled with the exspress middleware - framework & the react,js frontend framework,
- these technologys stack up beautifully in a tech triangle to be an enormously powerfull application,
- With a small bit of imagination the results of this application can be very interesting indeed,
- In this project I learned a great deal about fullstack development, it took many months to figure out all the
- different aspects that all must fit togheter perfectly or your application just will not work, 
- I made many many errors on this project, but for every error, I had to research & debug to find the answer,
- every answer brought me closer to my goal of finshing with a fully workiing application built with js,
- The exspress framework was a mind blowing development discovery, the abitly to programme a server in development,
- & on heroku gave me the abilty to build this awesome app, with its amazing structure & intergrtion with node.js on the front 
- end , coupled with the mmost powerfull database in the world , postgres,
- building the database was another awesome expierence, while it is only a very small database, it operating seemlesly 
- with express middle ware,
- building my database gave me a much cleare picture of all the moving elements, 
- building the front end was by far the most fun , reusing the react componets & using the import method just like django & flask , it is truly a joy to work with
- building the express server was surprisingly alot more simple that I prevoiusly had imagined, once I had it up & running, it
- was just a matter of refering to the documentation, which for express is excellent,
- it has taken me at least 6 months to complete this project, & it has been an amazing expierence, with a tonne fo errors I just - kept drilling away till I got it right which was on 15/09/2018
 
## UX

The theme of this website is geared towards the AI Community, the Particle.js background is indented, to be space & futuristic like, 

- The content is very minmal, this project is purely based on the react.js view

- liberary to create the frontend  & the exspress middleware framework for bridging our gap between our database, our server

- & our FronEnd a triangle of technologys seemlesly integrating, this all happens behind the scenes

- With the use of tachyons , it was very easy to style with minimil code & the design of this application should reflect the small amount

- of css code it took to style it , very minmal but very effective ,

- while the background is very a lot , a quick use of the application &

- its power soon balances out the whole application into one application,

- There is also a rank fearture in this project that lets the user know how many time they have submitted a url for face dedection

- The register & signin is also very minimil , with the indent to get the user into the appliaction asap, 

- The logo is indented to reflect the theme of the site, futuristic & bionic like, with a mind of its own if you will 

- My Application is very easy to use , it is just a matter of copy & pasting a valid image url from google images & pasting it back into
- The dedect box & watch the magic happen ,

- My Application looks amazingon all screnn sizes , this is down to react responsivness 
- My Application is build for the desktop & tablet, it is not very user freindly on the mobile device ,
- while it possible to achieve the task of the operation, it is not a very easy expeirence, it was built for the desktop , it is
- not very user freindly on the laptop , as a user has to manully copy & paste useing the touch pad or shift & arrows
- again not very user freindly ,
- Where this application really shines is on the desktop with the mouse,

- You can see the power of FaceFinder here

- [FaceFinderScreenShots](https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example1.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example2.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example3.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example4.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example5.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example6.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example7.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example8.PNG)
- (https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/tests/Awsome+example9.PNG)

## Features
## clarifaiAPI
- The Main Fearture of this application is the clarifaiAPI.
- clarifai is a machine learning api free of charge,
- It trains models in millions pictures of one subject to regcognise just about anything

## React.js
- The FrontEnd
- I built this using react.js, with create react app command , after my boiler plate project was created,
- I cut out the contents of app.js , & kept the component function
- I Started the development server with npm start
- First I installed Tachyons with npm install tachyons & imported them in to my index.js
- I also installed particle.js with npm install react-particles
- I then created my components
- My Navigaation
- My Logo -- I installed React-tilt.js to interact with my logo & saved as a dev, then imported into my logo component
- My ImageLink Form
- My Face Recognition -- I installed clarifiy with npm & imported into my app.js
- My Signin
- My Register
- My Rank
- Next I imported my components into my Navigation.js ,FaceRecognition.js ,Logo.js ,ImagelinkForm.js ,Registration.js ,Signin.js
- Rank.js 
- This was an amazing way to develop, reusable React components , the dry methodology 
- I aslo imported all these components into my app.js
- Next I created my css files & styled my project, with main styles in index.css, which effect my intire app


## postgresDatabase
- The Database
- First I needed to start my database server in my pgAdmin management console, while this was running
- Next I had to have both my frontend project/facefinder & my backend/face-finder-backend-api
- running on there own local development servers,I did this with Visual studio Code terminals,
- this is with the front end already coded & setup to connect to my application
- postgres uses sql to communicate with my express server requests
- For the database in my project I chose the rational database postgres , in order to achieve this I needed to install pgAdmin3,
- to manage my database,
- after installation I needed to create my [database], I acccomplished this with both the postsql cli & pgAdmin3 ,
- Next I needed to map out my schema, once I was ready to build
- Next I created my tables to create my columns by inserting my sql statements in pgAdmin3, for ease of use
- I accomplished this by creating a joined table, between the users table & the login table
- they will be programaticly connected through the email field 
- I created my user, by inserting my sql statements in pgAdmin3, for ease of use
- Next I tested my application by restarting both development servers
- my Express server is now connected to my database & is also responding back to my front end
- all these operations had to be carried out simultaneously
- In my local env the application is operating 100%

 You can see view my database here 

 [FaceFinderDatBaseScreenShots](https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/database/database_proof.PNG)
 [FaceFinderDatBaseScreenShot](https://s3-eu-west-1.amazonaws.com/clives-facefinder-bucket/database/login_proof_of_database.PNG)



## Node.js & NPM 
- The Robot
- I used Node.js & NPM as a package manager to install my modules & creates my package.json
- & with node everything runs in the browser 
- Heroku will need my package.json to rebuild my project
- Node is also what gives us the abitly to build the backend server in express



## Exspress.js
- The Server
- I Installed express with node & npm
- I used the express module in node to build the backend server in express with the require function, 
- I programmed the server to listen on port 3000
- I succesfully started my development server
- began testing & buiding my backend server



## THE FUTURE
##### I will creating in the future a react component for a new auth system, with much more fuctionalty, suvh pasword & email ##### recovery , but this would of been far to much to implement, the main scope of this project is the discover the power of ##### clarifai 
##### I hope to develop on this project in the future to train a model to dedect recthangles, then I can extract the shapes with ##### software such Adobe ai, I can then use these shapes the create isomorphic designs, example would be point the model at a ##### skyline & extract the shapes & then build the isomorphic city.
##### Get 100% in LightHouse
##### Dockerisation for greater speed & performance


## Technologies Used
- [clarifaiAPI](https://clarifai.com/)
    - The project uses **clarifaiAPI** Clarifai is an artificial intelligence visual recognition company 

- [JavaScriptES6](https://nodejs.org/)
    - The project uses **http://es6-features.org/** is commonly used for client-side scripting on the World Wide Web, and for writing server - applications and services using Node.js.

- [Node.js](https://nodejs.org/)
    - The project uses **https://reactjs.org/** A JavaScript library for building user interfaces.

- [NPM](https://www.npmjs.com/)
    - The project uses **https://reactjs.org/** A package manager 

- [Express.js](https://expressjs.com/)
    - The project uses **https://reactjs.org/** A JavaScript library for building user interfaces.

- [React.js](https://reactjs.org/)
    - The project uses **https://reactjs.org/** A JavaScript & Node.js web application framework library for building user interfaces.

- [PGAdmin3](https://www.pgadmin.org/)
    - The project uses **https://reactjs.org/** Open Source administration and development platform for PostgreSQL

- [Postgres](https://www.postgresql.org/)
    - The project uses **https://www.postgresql.org/** PostgreSQL is a powerful, open source object-relational database system

- [Git&GitHub](https://github.com/)
    - The project uses **https://github.com/** to version control the development project 

- [Heroku](https://www.heroku.com/)
    - The project uses **https://www.heroku.com/** to Deploy My Project 

- [MARKDOWN](https://https://www.w3schools.com/)
    - The project uses **https://https://www.w3schools.com/** to Deploy My Project 

- [tachyons](https://tachyons.io/)
    - The project uses **https://tachyons.io/** It’s easy to build components with Tachyons so it works well with React & Static html

- [knex](knexjs.org/)
    - The project uses **knexjs.org/** Knex.js is a "batteries included" SQL query builder for Postgres

- [HTML5](https://https://www.w3schools.com/)
    - The project uses **HTML5** to house the sturcture & the base semantics.
    
- [CSS3](https://https://www.w3schools.com/)
    - The project uses **CSS3** to to Style the elements, Responsive WebDesign & to introduce animations.
    
- [BootStrap3](https://https://getbootstrap.com/)
    - The project uses **BootStrap3** to assist the Developer with a build in css libaray ,aswell reusable components.
    - This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
    
- [Ajax](https://https://www.w3schools.com/)
   - Update a web page without reloading the page, requesting data from a servers, 
   - Receive data from a server
   - Send data to a server

- [VisualStudioCode](https://code.visualstudio.com/)
    - The project uses **VisualStudioCode** to Write/Code & format the syntax in various languages.
    
- [Adobe Ai](https://www.adobe.com/ie/products/illustrator.html)
    - The project uses **Adobe Ai** to create the Logo
  
- [GoogleFonts](https://fonts.google.com/)
    - The project uses **GoogleFonts** to enhance the use visual text & ensure readabilty on various platforms & screens
    
- [FontAwesome](https://fontawesome.com/)
    - The project uses **fontawesome** to inhance webfonts & increase seo conversion, also to assist the developer in creating a consistant textual flow 
    
- [LightHouseChromeExstention](https://chrome.google.com/webstore/detail/lighthouse)
    - The project uses **LightHouseChromeExstention** to test seo data & accsseibitly & best practices
    
- [validator.w3](https://validator.w3.org/)
    - The project uses **validator.w3** to test seo data & accsseibitly & best practices
    
- [jigsaw.w3](https://jigsaw.w3g/)
    - The project uses **jigsaw.w3** to test validation of CSS3 
    
    



## Testing
##### I ran all my files through a validation test using

- [W3C](https://validator.w3.org/) for HTML.
- [W3C](https://jigsaw.w3.org/css-validator/) for CSS.
- [JS Hint](http://jshint.com/) for JavaScript.


Tested On   
- Chrome. 
- Internet Explorer.
- Microsoft Edge.
- Firefox. 
- Opera.
- Continous Design Testing SonyXsperia Mobile Phone 
- Continous Design Testing Windows10XL Mobile Phone
- [LightHouse](https://chrome.google.com/webstore/category/extensions)
- [Travis](https://travis-ci.org/) 
- [Postman](https://www.getpostman.com/) 




## Testing


### Test1 User1 ( True/False )
 - Was User1 able to register for an account ?
 - True 
 ### Test1 User1 ( True/False )
 - Was User1 able to dedect a picture with the detection box ?
 - True
 - RESULT 100%



### Test1 User2 ( True/False )
 - Was User1 able to register for an account with the incorrect details ?
 - FALSH 
 ### Test1 User2 ( True/False )
 - Was User2 able to complete the task of filling out the details in the correct format ?
 - TRUE
 ### Test1 User2 ( True/False )
 - Was User2 able to Detect a picture without a face ?
 - Falsh
 ### Test1 User2 ( True/False )
 - Was User2 able to Detect a picture with a face ?
 - TRUE
 - RESULT 100%


 ### Test1 User4 ( True/False )
 - Was User4 able to register a second account with the same email & a different password ?
 - Falsh
 ### Test1 User4 ( True/False )
 - Was User4 able to register a second account with a different email and a new password ?
 - True 
 ### Test1 User4 ( True/False )
 - Was User4 able to Detect a picture with a face ?
 - TRUE
 ### Test1 User4 ( True/False )
 - Was User4 able to Detect a picture without a face ?
 - Falsh
 - RESULT 100%

 


 ### Test1 User5 ( True/False )
 - Was User5 able to sign up with a incorrect email (missing @) ?
 - Falsh 
 ### Test1 User5 ( True/False )
 - Was User5 able to move from the login to the signin without getting lost ?
 - True
 ### Test1 User5 ( True/False )
 - Was User5 able to login with his prevoius email & differnt password ?
 - Falsh
 ### Test1 User5 ( True/False )
 - Was User5 able to login with his prevoius email & differnt password ?
 - Falsh
 ### Test1 User5 ( True/False )
 - Was User5 able to break the application by inserting incorrect urls into the detect box
 - Falsh
 - RESULT 100%

 #### clarifaiAPI face recognition tests,
 ## TEST1
 - Was Clarafai succesfull in telling the differnce between a mans face & a K9S
 True
 - RESULT 100%
 ## TEST2
 - Was Clarafai succesfull in telling the differnce between a womens face & a drawing of the same face on the smame portrate,
 - & did clarifai pick the more face like ? 
 True
 - RESULT 100%
 ## TEST3
 - Was Clarafai succesfull in recognising a apps face
 True
 - RESULT 100%
 ## TEST4
 - Was Clarafai succesfull in recognising  a mask of a face 
 True
 - RESULT 100%
 ## TEST5
 ## TEST4
 - Was Clarafai succesfull in recognising a face in a crowd of faces
 True
 - RESULT 100%
 ## TEST6
 - Was Clarafai succesfull in recognising a face made of plaster
 True
 - RESULT 100%
 ## TEST7
 - Was Clarafai succesfull in telling the difference bbetween an aimation face ,which was the same face &
 - the same face,s human face
 Falsh
 - RESULT 0%
 ## TEST6
 - Was Clarafai succesfull in recognising a pencil face & a computer generated face 
 True
 - RESULT 100%
 ## TEST8
 - Was Clarafai succesfull in recognising a face made artist fine pencil
 True
 - RESULT 100%
 ## TEST9
 - Was Clarafai succesfull in recognising a face made of plaster
 True
 - RESULT 100%
 ## TEST10
 - Was Clarafai succesfull in recognising a face made of plaster
 True
 - RESULT 100%
 ## TEST11
 - Was Clarafai succesfull in recognising a face made of plaster
 true
 - RESULT 100%
 

 



####2018-09-14T18:30:10.815632+00:00 heroku[router]: at=info method=POST path="/imageurl" host=face-finder-backend-api.herokuapp.com request_id=720c115d-ef37-46ea-a7a9-f6dc731d5b92 fwd="80.233.35.66" dyno=web.1 connect=1ms service=85ms status=400 bytes=273 protocol=https.###****the big bug goes here

If this section grows too long, you may want to split it off into a separate file and link to it from here.




## Deployment

- To deploy this application/project the first task is to make sure my project is version controlled with GitHub
- I needed to depoy my front end & backend
- backend was first up with the use of the HerokuCLI, I created an heroku app from the command line
- by running the git remote -v command I could calrify my heroku address
- Then I Git add ./Git commit -m ""/ Git push/ Git push heroku master
- Heroku will build my app with my node modules packgage.json file
- After Success Heroku gave me the end point for my fetch function for my app.js & register & images urls
- In completing this task I pointed the frontend to the location of the server,that was provided by heroku
- Next I had to rebuild my database, I did this in the herokuCLI by running heroku pg:psql
- this opened up my heroku psql cli inside of heroku
- Then I went back to my pgAdmin & copied my statements from database schema
- With the pgsql cli runninig I inserted my schema into my database which was on heroku

## Deployment part2
- Next task was to deploy my front end on heroku
- So once again I creatd an app from the HerokuCli
- then I retrived my heroku.git address
- Next I needed to
- Then I Git add ./Git commit -m ""/ Git push/ Git push heroku master

## VERSION CONTROL
  The backend project folder lives at this address
  [github](https://github.com/90t/face-finder-server.git)
- origin  https://github.com/90t/face-finder-server.git 
- heroku  https://git.heroku.com/face-finder-backend-api.git 
-

  The frontend project folder lives at this address
  [github](https://github.com/90t/facefinder.git) <------ THIS IS THE LIVE PROJECT FOLDER
- heroku  https://git.heroku.com/face-finder-front-end.git 
- origin  https://github.com/90t/facefinder.git 

  ## My front end project can be viewed fully deployed on heroku [here](https://face-finder-front-end.herokuapp.com/).

  ## My backend project can be viewed fully deployed on heroku [here](https://face-finder-backend-api.herokuapp.com/).
  


- I added my env vars in the heroku cloud managment console in the settings section,
- which were my api key & my CLARAFIAI_API variable
- I created a viarible named CLARAFIAI_API in my backend project this connected my application to heroku 



# It is very easy to download install & run this project directly,



## Credits
StackOverFlow

### Content
- The text for just a small bit of the tech was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from PixelBay

### Acknowledgements
##### I didn't base my work off other code, I used only what I had learnt in syllabuss1/LMS1 & syllabuss2/LMS2(cloud-9) &
- [Node.js](https://reactjs.org/)
    - Documentation.

- [Esxprss.js](https://reactjs.org/)
    - Documentation.

- [React.js](https://reactjs.org/)
    - Documentation.

- [PGAdmin3](https://www.pgadmin.org/)
    - Documentation.

- [Postgres](https://www.postgresql.org/)
    - Documentation.

- [clarifaiAPI](https://clarifai.com/)
    - Documentation.


C:\Users\USER\Desktop\face-finder\facefinder>heroku git:remote -a face-finder-front-end
set git remote heroku to https://git.heroku.com/face-finder-front-end.git





