import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';  // regular Bootstrap
import './css/bootstrap.custom.css';     // custom Bootstrap
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Calendar from "./pages/Calendar";
import Community from "./pages/Community";
import MinistrySupport from "./pages/MinistrySupport";
import Music from "./pages/Music";
import OnlineStore from "./pages/OnlineStore";
import PastShows from "./pages/PastShows";
import Photos from "./pages/Photos";
import PrayerRequests from "./pages/PrayerRequests";
import Videos from "./pages/Videos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="bio" element={<Bio />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="community" element={<Community />} />
      <Route path="ministry-support" element={<MinistrySupport />} />
      <Route path="music" element={<Music />} />
      <Route path="online-store" element={<OnlineStore />} />
      <Route path="past-shows" element={<PastShows />} />
      <Route path="photos" element={<Photos />} />
      <Route path="prayer-requests" element={<PrayerRequests />} />
      <Route path="videos" element={<Videos />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
