# Secret Gigs - Full Stack App

[TOC]

## Contributors

Ignacio Giadach | https://github.com/igscl/

Luisa Ziccarelli | https://github.com/luisaziccarelli



## Deployed website

Link: 

Link:



## 1. Description of the website 

### 1.1 Purpose 

##### 1.1.1 What is the problem this application is trying to solve?

This year the events surrounding the coronavirus pandemic have affected millions of Australians and people around the world. Some industries have suffered more than others. For those Australians working in the arts and the entertainment industry there have been major financial loses due to cancellation of major events, closure of venues, and restrictions around social distancing.

 For a lot of musicians this has meant losing not only their jobs, incomes, but also an important space to connect with their fans and followers. One of the most concerning things is the uncertainty around this situation. A lot musicians and bands do not know  when these restrictions would ease and they would be allowed to reschedule their gigs. Additionally, a lot of fans travel to see their favorite bands, which means these events have been are also heavily impacted by the borders re-openning and easing of cross-state and even international travel restrictions. 

##### 1.1.2 How is this application solving the problem?

Secret Gigs is an application that allows bands to connect with their fan-base in a live setting during COVID times. Due to audience restrictions and venues being generally closed, this app allows fans to attend events in secret locations for a limited number of attendees by a random selection process. The idea is to keep the social distancing and safety measures in place, while also allowing safe and controlled events. This way, both musicians and bands are able to continue to perform and fans are able to enjoy the experience of watching their favorite bands live again. 

### 1.2 Functionality 

Secret gigs allows fans or music enthusiasts to register in the website to be able to apply for open events. Once a user register they would be able to see the name of the event, the general location, and capacity. If a user applies they will be notified whether their application has been approved or rejected. Since the capacity of the events is limited, the access would be managed by either random selection or in a first-come first-serve basis. 

Once the capacity for that particular event is reached and there are no invitations remaining, the user will be notified of the specific location and the 'secret' location will be revealed to the accepted user.

### 1.3 Features

Main features:

- A user can register in the application. 
- A registered user is able to login.
- A registered user is able to go to the account section. In this section they can see their profile and event applications, listing current available events they can apply to.
- A registered user has the ability to apply to events.
- A registered user has the ability to edit and delete their profile.
- A registered user has the ability to get an application accepted or denied.

Sprinkles:
- A registered user can go into payment page when application is accepted.
- Once a registered user pays for the application, is able to see further details of the gig.
- An admin has the ability to login to an admin account.
- An admin has the ability to see all user profiles.
- An admin has the ability to see Open events and Closed events.
- An admin has the ability to see the number of invitations accepted and remaining for an open/closed event. 

### 1.4 Target audience
Specific bands fan-base, music, concert and live music enthusiasts that haven't attended any live gigs due to current events. This also works under "normal" conditions, having the ability to increase the attendees per venue as needed. Specific audiences would relate to the type of music, genre, year, etc.

### 1.5 Tech stack
- ​	Front-end
  - React.js: creates and manages the front-end of the application. 
  - JS: react uses javascript and more specifically ES6 standard features. Javascript will also be used to build the back-end of this application.
  - JSX: stands for JavaScript XML, which allows to write HTML in react.
  - HTML 5: HTML tags will be used inside JS code and transformed into react components by JSX.
  - CSS 3: will be used to style the react components.
  - Bootstrap: framework used for building response websites.

- Back-end
  - Node.js: server side run time. 
  - Express: web framework for node that will handle the http requests from the front end. 
  - MongoDB: document-based database used to store persistent state and data relevant to the users and events. 
  - Mongoose: is a Mongo DB object modeling tool that allows to communicate with the MongoDB through the MongoDB driver.
  - Passport.js: is authentication middleware for Node.js to handle the users and admins.

- Testing
  - Mocha: test framework for node.js used for unit and integration testing.
  - Expect: assertion style or library chosen for unit testing.
  - Cypress: testing framworkd running on and in the browser chosen for testing of the front-end and integration testing.
  
- Deployment
  - Netlify: a cloud platform used for hosting the front-end of the application. 
  - Heroku: a cloud platform used for hosting the back-end the application.
  - MongoDB Atlas: global cloud database to deploy and scale our MongoDB. 

- Source control 
  - Git: version control system used to manage and keep track of the source code history. 
  - GitFlow: the'Forking workflow' was used for this application, which allowed each contributor to have their own server-side repository, for each contributor to take turns manage the push to the official repository, and lastly the use of feature branches.
  - Github: cloud-based hosting service to manage the git repositories for the application. 


## 2. Dataflow Diagram

![alt text](./docs/R2-DFD.png "Data Flow Diagram")

## 3. Application Architecture Diagram

![alt text](./docs/Application_architecture_diagram.png "Application Architecture Diagram")

## 4. User Stories

![alt text](./docs/secret_gigs_userStories.png "User Stories")

## 5. Wireframes

### 5.1 Desktop
![alt text](./docs/wireframes_desktop/events_desktop.png "Home page Desktop")
![alt text](./docs/wireframes_desktop/sign_up_desktop.png "Sign up desktop")
![alt text](./docs/wireframes_desktop/login_desktop.png "Login desktop")
![alt text](./docs/wireframes_desktop/profile_desktop.png "Profile desktop")
![alt text](./docs/wireframes_desktop/admin_dashboard_desktop.png "Admin desktop") 
![alt text](./docs/wireframes_desktop/profiles_desktop.png "Profiles dsk")
![alt text](./docs/wireframes_desktop/events_desktop.png "Events dsk")

### 5.2 Ipad
![alt text](./docs/ipad_wireframes/ipad1_wireframes.png "Home, sign up, login Ipad")
![alt text](./docs/ipad_wireframes/ipad2_wireframes.png "Profile, admin, profiles, events Ipad")

### 5.3 Mobile 
![alt text](./docs/mobile_wireframes/mobile_one.png "Home, login, sign up, profiles Mobile")
![alt text](./docs/mobile_wireframes/mobile_two.png "Admin, profiles, events Mobile")

## 6. Project Management

#### 6.1 Trello Screenshots (06-07-2020)
![alt text](./docs/screenshots/trello_screenshot1_06:07.png "Trello 1")
#### 6. 2 Trello Screenshots (08-07-2020)
![alt text](./docs/screenshots/trello_screenshot_8:7.png "Trello 2")
#### 6. 3 Trello Screenshots (09-07-2020)
![alt text](./docs/screenshots/trello_screenshot2_9:7.png "Trello 3")
#### 6. 4 Trello Screenshots (10-07-2020)
![alt text](./docs/screenshots/trello_screenshot_10:7.png "Trello 4")
#### 6.5 Trello Screenshots (11-07-2020)
![alt text](./docs/screenshots/trello_screenshot_11:7.png "Trello 5")
#### 6.6 Trello Screenshots (13-07-2020)
![alt text](./docs/screenshots/trello_screenshot_13:7.png "Trello 5") 
