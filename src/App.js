import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';

function App() {
  return (
    <div className="app">
       <Sidebar/>
       <Feed/>
       <Widgets/>
       {/* <Sidebar/> */}
       {/* <Feed/> */}
       {/* <Widget/> */}
    </div>
  );
}

export default App;
