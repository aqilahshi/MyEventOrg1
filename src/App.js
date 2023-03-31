import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Activity from './pages/Activity.jsx';
import Calls from './pages/Calls.jsx';
import Chat from './pages/Chat.jsx';
import Calendar from './pages/Calendar.jsx';
import Files from './pages/Files.jsx';
import Applications from './pages/Applications.jsx';
import MyEvent from './pages/MyEvent.jsx';
import Profile from './pages/Profile.jsx';
import Collapsible from './components/Collapsible';

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
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/files" element={<Files />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/myevent" element={<MyEvent />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;