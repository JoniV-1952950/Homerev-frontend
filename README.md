# Homerev frontend application

This repository contains the code for the frontend application in React.

The deployed application can be found at https://homerev-frontend.web.app/. It is necessary to login before using the application. 

#
To run this application locally, you can run these commands in the root directory of the project:
```bash
npm run relay ## make sure to run the relay compiler first so that the queries and fragments are loaded correctly
npm start # starts a development server locally
```

To deploy it to firebase hosting:
```bash
firebase login ## make sure you are logged in to your firebase account

npm run build ## build the static files
firebase deploy ## deploys the build directory to firebase hosting
```

This application is also automatically deployed to firebase hosting on a push to the main branch.