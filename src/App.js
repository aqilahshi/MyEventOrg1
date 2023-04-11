import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Activity from './pages/Activity.jsx';
import Calls from './pages/Todo.jsx';
import Chat from './pages/Chat.jsx';
import Calendars from './pages/Calendars.jsx';
import Files from './pages/Files.jsx';
import Applications from './pages/Shop.jsx';
import MyEvent from './pages/MyEvent.jsx';
import Profile from './pages/Profile.jsx';
import "./style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEvent from './pages/AddEvent';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/files" element={<Files />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/myevent" element={<MyEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myevent/addevent" element={<AddEvent />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;