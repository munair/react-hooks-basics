import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LifecycleDemo = () => {
  // It takes a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  }, [] ); // dependencies to watch = leave blank to run once or you will get a stack overflow

  return "I'm a lifecycle demo";
}

const App = () => {
  // Set up a piece of state, just so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <div className="wrapper">
      <header id="about" className="heading">
        <img src="images/usefulcoin-whiteicon-128x128px.png" alt="usefulcoin icon" />
        <h2>USEFULCOIN</h2>
        <h6>EDUCATION & TRAINING</h6>
      </header>
      <div id="controls" className="container">
        <h4>The Basics of React Hooks and the Component Lifecycle</h4>
        <button className="fitted" onClick={reRender}>Re-render</button>
        <button className="fitted" onClick={toggle}>Show/Hide LifecycleDemo</button>
      </div>
      <div id="output" className="container">
        {mounted && <LifecycleDemo/>}
      </div>
      <footer id="credits" className="conclusion">
        <h5>Inspired by: <a href="https://www.codegrepper.com/app/profile.php?id=8932">Deadly Muffin</a></h5>
      </footer>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
