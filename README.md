# Movie Search App
This is a React application that uses The Movie Database (TMDB) API to fetch and display movie data.

## View on Netlify
The app can be viewed at: https://kimberlysfilmsearch.netlify.app/

## Running the App Locally
Follow these steps to set up and run the application locally.

### Prerequisites
Node.js and npm need to be installed on your machine.

### 1. Clone the Repository
Clone this repository to your local machine:

```bash
git clone https://github.com/klynnsmith226/movie-search-app.git
cd movie-search-app
```

### 2. Install Dependencies
Install the necessary npm packages by running:

```bash
npm install
```

### 3. Get the API Key
This app requires an API key from The Movie Database (TMDB) to fetch movie data.

Go to the TMDB API page and sign up for a free account if you don’t have one.
Once logged in, navigate to Settings > API and request an API key.
Copy the API key provided by TMDB.

### 4. Set Up Environment Variables
To keep your API key secure, the application uses environment variables stored in a .env file.

In the root of your project directory, create a .env file:

```bash
touch .env
```
Open the .env file and add the following line, replacing your_api_key_here with your actual TMDB API key:

```bash
REACT_APP_API_KEY=your_api_key_here
```

Save and close the .env file.


```bash
.env
```

### 5. Start the Development Server
With the environment variable configured, you can start the app by running:

```bash
npm start
```

This command will start the development server, and you can view the app in your browser at http://localhost:3000.

## Build for Production
To build the app for production, run:

```bash
npm run build
```

This will create an optimized build of the app in the build directory.

