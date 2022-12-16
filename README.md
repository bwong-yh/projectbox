# PROJECTBOX

PROJECTBOX is a project management application that allows registered users to view and create projects that need to be monited by each other.

This application is built using React and Material UI for the user interface, while the backend (including authentication) part is managed by Firebase.

## Special Features

### Forms

All forms are built using [Formik](https://formik.org/) and [YUP](https://github.com/jquense/yup) (for verification). Each form field will display an error message, if any, if it does not pass YUP's requirements. Forms cannot be sumbitted until all requirements are fulfilled and once Firebase has processed and returned data, form fields will be reset and users will be redirect to specific page.

![live-usage](./docs/signup-recording.gif)

<em>To update a file for avatar is optional, however if user decided to update a file, file size cannot exceed 100kb. (Error message will be displayed and sign up is prohibited if file size is greater than 100kb.)</em>

### Live Update

All projects include a comment section for registered users to enter messages, new messages will be rendered automatically without user reloading the page.

![live-usage](./docs/live-update-recording.gif)

Another live update is user status, whenever user is logged in, a green badge will appear beside their avatar.

### Responive Design & Modes

PROJECTBOX's layout is designed to fit a wide range of devices. In addition, user is capable of switich light and dark mode based on their preferences.

![live-usage](./docs/mobile-and-mode-recording.gif)

## Usage

- run `git clone git@github.com:bwong-yh/projectbox.git`
- navigate to `projectbox` directory
- run `npm install` to install dependencies
- run `npm run start` to start Webpack Development Server and browser should launch automatically
  - you can always enter `http://localhost:3000` in the address bar to launch the app
- log in using default email and password
  - `billy@dev.com` and `test1234`
- OR sign up using any email and password
