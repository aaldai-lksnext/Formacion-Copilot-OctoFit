import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1>OctoFit Tracker</h1>
        <Routes>
          <Route path="/" element={
            <div>
              <p>Welcome to OctoFit Tracker</p>
              <p>Track your fitness activities and compete with your team!</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
