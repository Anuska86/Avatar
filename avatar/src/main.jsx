import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from "./components/Avatar.jsx";

function App() {
  return (
    <>
      <Avatar src="avatar\src\imgs\woman.jpg" alt="Emily Spring" />
      <br />
      <Avatar>EM</Avatar>
      <br />
      <Avatar />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);