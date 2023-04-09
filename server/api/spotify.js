import { Buffer } from "buffer";

const text = "fabian";
const config = useRuntimeConfig();
const clientID = config.secret.spotifyClientID;
const clientSecret = config.secret.spotifyClientSecret;
const refreshToken = config.secret.spotifyRefreshToken;

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

// This gets the access token from Spotify to connect to the API using provided refresh token.
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });
  return response.json();
};

// Get the current now playing track of given user access token.
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();
  return $fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default defineEventHandler(async (_) => {
  try {
    const response = await getNowPlaying();
    if (!response || !response.item) {
      return { isPlaying: false, res: response.status };
    }
    return response;
  } catch {
    return { isPlaying: false };
  }
});
