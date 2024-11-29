// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// // import Button from '@mui/material/Button';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import WeatherApp from './WeatherApp';


// function App() {
 
//  return (<>
//      <WeatherApp/>
//  </>);
// }

// export default App


import './App.css';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      <WeatherApp />
    </div>
  );
}

export default App;
