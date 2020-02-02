# Magnitt

## Installation and running
The app requires the following pre installed:
* NPM version at least 6.9.0

Use `npm i` to install dependencies

Use `npm start` to run it.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Search`

You can search for the following users:
- Danial Aftab
- Tony Stark
- Peter Parker
- Bruce Wayne
- Selina Kyle

You can search for the following organizations:
- Acme inc
- Wayne Enterprises
- Stark Industries
- Pepsi Co


### `Api mocking`

All apis are mocked by sending requests to a json file named data.json inside ./mocks folder

### `Live Url`

The App is deployed to heroku and can be viewed on [https://magnitt-test.herokuapp.com/](https://magnitt-test.herokuapp.com/)

### `Assumptions`
The app only presists data while it not refreshed, Upon refreshing the data is pulled from the file again and the state is restored. The changes are not written to the json file.


