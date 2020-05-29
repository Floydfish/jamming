require('dotenv').config();

const clientID = process.env.REACT_APP_API_KEY
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } 

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessTokenMatch = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // This clears the parameters, allowing us to grap a new access token when it expires.
            windows.setTimeout(() => {
                accessToken = ''
            }, expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }
    }
};

export default Spotify