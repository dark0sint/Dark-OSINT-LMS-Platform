import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Dark OSINT LMS</h1>
          <p>Learn OSINT ethically. Resources: <a href="https://literatiacendekia.com/">Literatia Cendekia</a>, <a href="https://darkosint.blogspot.com/">Dark OSINT Blog</a></p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
