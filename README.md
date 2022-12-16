# PROJECTBOX

PROJECTBOX is a project management application that allows registered users to view and create projects that need to be monited by each other.

This application is built using React and Material UI for the user interface, while the backend (including authentication) part is managed by Firebase.

## Special Features

### Forms

All forms are built using [Formik](https://formik.org/) and [YUP](https://github.com/jquense/yup) (for verification). Each form field will display an error message, if any, if it does not pass YUP's requirements. Forms cannot be sumbitted until all requirements are fulfilled and once Firebase has processed and returned data, form fields will be reset and users will be redirect to specific page.

![live-usage](./docs/signup-recording.gif)

<em>To update a file for avatar is optional, however if user decided to update a file, file size cannot exceed 100kb. (Error message will be displayed and sign up is prohibited if file size is greater than 100kb.)</em>
