# BeFit React.js Project

## About The Project - Non-technical Description

BeFit is a platform where everyone can check the schedule for different physical acivities and book a place for yoga, crossfit, boxing etc. There is a blog where users can create, edit and delete topics.

This [project](https://github.com/pzheleva/befit) was created by [Preslava Zheleva](https://github.com/pzheleva) for the purposes of React. js Softuni Course, Feb-Apr 2023.

## Design

The application has two parts:

**Public** Users who are not loggen in can access the following pages:

- Sign In
- Sign Up
- About
- Home
- Schedule
- Blog

**Private** Logged in users can access the following pages:

- Home
- About
- Schedule
- Blog (Owners can edit and delete their topics and post comments/ users who are not owners of the property can read more about the topic and post comments)
- Post topic
- Booking
- Profile

# Installation

The following packages were used for this project:

- [React.js](https://react.dev/)
- [Firebase firestore database](https://firebase.google.com/)
- [HTML + CSS Free templates from Theme Forest](https://themeforest.net/)

1. Clone this repository
2. Navigate to the "my-app" folder
3. Run "npm install"
4. Add firebase.ts file to the "src" folder which should contain information about your firabase web configuration:

```
export const environment = {
    production: false,
    firebase: {
        apiKey: "data",
        authDomain: "data",
        databaseURL: "data",
        projectId: "data",
        storageBucket: "data",
        messagingSenderId: "data",
        appId: "data",
        measurementId: "data"
    }
  };
```

You can check [here](https://firebase.google.com/docs/web/setup) for more information about the configuration.

5. Navigate to the my-app folder and type "npm start"

Open http://localhost:3000/ and you should be ready.

## Learn More About React JS

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
