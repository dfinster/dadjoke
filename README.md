# dadjoke.fortc.com

## About

I wanted to learn more about React and I love Dad jokes. This is a static site that loads random jokes from [a simple json file](src/_jokes.json).

## Run the App

1. Install [Node.js](https://nodejs.org/).
1. Clone this repository.
1. Navigate to the project's root folder and install the required NPM packages.

```sh
npm install
```

1. Start the development server.

```sh
npm run start
```

1. Open the app at localhost port 3000.

```sh
http://localhost:3000
```

### Netlify Note

To [use React Router on Netlify](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/):

Create `_redirects` in the public folder with:

```sh
/* /index.html 200
```
