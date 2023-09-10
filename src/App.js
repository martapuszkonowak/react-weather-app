import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer className="footer pb-3 pb-sm-0">
          This project was coded by{" "}
          <a
            href="https://glowing-monstera-0eb10c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marta Nowak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/martapuszkonowak/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and is hosted on{" "}
          <a
            href="https://voluble-frangollo-7e9f68.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
