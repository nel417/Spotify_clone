import React, { useEffect} from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./state/DataLayer";
import { getTokenFromurl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  //   const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromurl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      //   setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    spotify
      .getPlaylist("37i9dQZEVXcF0gCJfVox8W?si=EWI7HP_-QaCHJXQ4yiwXiQ")
      .then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
  }, []);
  console.log(user);
  console.log(token);

  return (
    <div className="app">
      {" "}
      {token ? <Player spotify={spotify} /> : <Login />} {/*  */}
    </div>
  );
}

export default App;
