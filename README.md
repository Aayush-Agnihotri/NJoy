# NJoy

### Purpose
NJoy is the go-to trip-advising app created for the Garden State, providing information about New Jersey's favorite places and activities, including sporting events, concerts, resturants, beaches, and more. Data for the people's favorite was accumulated through crowdsourcing and surveys. NJoy allows users to plan their next trip, read and add reviews about locations, get travel advice, plot directions, read FAQs, learn about historical significance, and much more. 

### Installing and Running NJoy
1. Ensure you have the latest version of `Node` and `npm` installed on your machine
2. Clone the repo from GitHub
3. In your terminal, `cd` into the `NJoy` directory
4. Run `npm install`
5. Run `npm start`

### Frameworks and Resources
##### Front-end
NJoy's front-end was built in React, which serves content like reviews and ratings to the client by fetching data from the internal REST API. 

##### Back-end and Database
NJoy's back-end was built using Firebase, which stores review and ratings information and pushes the information to the front-end when requested. Additionally, NJoy's user authentication system was built using Firebase.

##### APIs
NJoy uses its internal Firebase API to access data like reviews and ratings. To display locations on a map and get directions, NJoy accesses the Google Maps API.

##### Note
Please provide new Firebase API configuration details in a `.env` file if using the app.
