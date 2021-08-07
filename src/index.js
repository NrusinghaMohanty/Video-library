import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {VideoProvider} from "./Context/videoContext"
import {HistoryProvider} from "./Context/historyContext"
import {WatchLaterProvider} from "./Context/watchContext"
import {LikevideoProvider} from "./Context/likevideoContext"

ReactDOM.render(
  <React.StrictMode>
    <LikevideoProvider>
    <WatchLaterProvider>
  <HistoryProvider>
  <VideoProvider>
  <Router>
    <App />
    </Router>
    </VideoProvider>
    </HistoryProvider>
    </WatchLaterProvider>
    </LikevideoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

