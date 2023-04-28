import React from "react";
// import Navbar from './components/Navbar';
// import Introduction from './components/Introduction';
// import ShowCase from './components/ShowCase';
// import TodoApp from './pages/projects/TodoApp';
// import HookCounter from './components/HookCounter';
// import JazrAlkalima from './pages/projects/JazrAlKalima';
import Footer from "./components/Footer";
import PrequisiteCourses from "./components/PrequisiteCourses";
// import Weather from './components/Weather';
import Tetris from "./components/Tetris";

function App() {
  return (
    <div className="App">
      {/* <Introduction />
      <br />
      <ShowCase
        title="Weather forecast"
        description="
      I made this app to practise fetching data from API in reactJS, also did some styling to it using Tailwind to be responsive with different screens."
        ShowApp={<Weather />}
        toRight={true}
      />
      <br /> */}
      <Tetris />
      {/* <Weather/> */}
      {/* <PrequisiteCourses />
      <Footer /> */}
    </div>
  );
}
export default App;
