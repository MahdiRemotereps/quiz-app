import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Notification from "./components/notifcatin";
import QuizProvider from "./Provider/quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Notification>
    <QuizProvider>
      <App />
    </QuizProvider>
  </Notification>
);
