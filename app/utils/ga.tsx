// utils/ga.js

import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-GFF36FH35B");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
