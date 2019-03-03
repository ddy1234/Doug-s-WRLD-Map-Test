# Better Together Dundee Data Hack - Wrld Tutorial

First things first we need to build a Server to host our application. To do so we will need a few bits and pieces setup in order to achieve this. There are a handful of accounts to be created and will need to be maintained. Some good advice from the outset is to open these accounts in multiple tabs in your browser. Let’s get started.

##### Create a GitHub account
*	If you don’t have one already you’ll need to create a GitHub account to complete this tutorial
*	Go to https://github.com/join
*	Pick a username, add your email, create a password and verify your account.
*	Then click ‘Create an account’
*	Select a Free Account (unless your loaded, then you can buy whatever you want)
*	Click ‘Continue’
*	Now you can answer some questions and click ‘Submit’ or just click ‘skip this step’
*	Verify your email address
*	Bingo bongo Bango and you have yourself a GitHub account

##### Clone the tutorial code
*	Click the + icon at the top right of the GitHub screen
*	In the drop down select ‘Import repository’
*	Add in this URL in ‘Your old repository’s clone URL’ box: 
https://github.com/matthew-davis/dundee-data-hack-wrld-tutorial.git
*	Then give your project a Name of your choosing
*	You can make the project public or private
*	Then click ‘Begin import’
*	GitHub will do some work, go git yourself a drink (notice the pun?)
*	GitHub will send you an email when it’s done working
*	Now that you have the starter code you’ll need a server to put it on
		
##### Go online and create a Heroku Account
*	Go to https://signup.heroku.com/login
*	Confirm your email address
*	This should be you with an Heroku account 		

##### Create an application
*	Within the Heroku account click ‘Create new app’
*	Give your app a name and pick a region: You can pick any region you want it is essentially asking you where you want your cloud server to be physically located. For this project you can pick whatever region you feel like.
*	Click ‘Create app’
*	Pick GitHub as the Deployment Method (located in the ‘Deploy’ tab)
*	Click the ‘Connect to GitHub’ button
*	If you are signed in to GitHub (and you still should be) it will ask you to authorize the connection
*	Once authorized a new section will be created called ‘Connect to GitHub’
*	Type in the name of the repository you cloned and named and then click ‘Search’
*	It will find the repository and you can click ‘Connect’
		
##### Get a Wrld API key
*	The final piece to this puzzle is a Wrld API key
*	Go to https://accounts.wrld3d.com/users/sign_up
*	Sign up for an account
*	Once in, on the My Account page click the API Keys tab
*	Type in a name (any name will do)
*	And then select JavaScript as the Target SDK
*	Click Create API Key and one will be generated
*	The Key is listed in the table below the creation form

##### Hard core hacking
*	Go to your GitHub account and view the repository you cloned
*	In the folder called ‘src’ there is a file called ‘App.js’ click it
*	On the next page you see the code in the file, click the pencil in the upper right corner of the box holding the code
*	Copy your Wrld API Key and paste it over the one there on line 6.
*	A the bottom of the page click Commit changes
*	Call your friends and tell them you’re now ready to hack into the Pentagon

##### Launch Application
*	Back in the Heroku site open the ‘Settings’ tab
*	In the section on Buildpacks click ‘Add buildpack’
*	Click ‘nodejs’ and the click ‘Save changes’
*	Return to the ‘Deploy’ tab
*	In the ‘Manual deploy’ section click ‘Deploy Branch’
*	At the top of the page click the ‘Open app’ button
*	After a minute or so while the server builds dependencies you will be confronted with a 3D model of Abertay
*	High five your neighbour
		
##### Spend some time with the documentation
*	https://www.wrld3d.com/wrld.js/latest/docs/examples/

