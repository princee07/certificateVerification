import React, { useState } from 'react'; // Import useState
import './App.css';
import CertificateTemplate from './components/Certificates/CertificateTemp1/Certificate1'; // Make sure the path is correct
import LandingPage from './components/LandingPage/LandingPage';
import NavbarTemp from './components/Navbars/NavbarTemp/NavbarTemp'; // Fixed typo in import path
import LogoUploader from './components/Certificates/CertificateTemp1/LogoUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Assuming you have a Login component in pages folder

const App = () => {
  const [name, setName] = useState('John Doe'); // Replace with actual name input
  const [orgName, setOrgName] = useState('Organization Name'); // Replace with actual organization name input
  const [orgLogo, setOrgLogo] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavbarTemp />
        
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Main landing page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          {/* Add more routes as necessary */}
        </Routes>

        {/* Input fields for name and organization name */}
        <div style={{ padding: '20px' }}>
          <input
            type="text"
            placeholder="Enter Candidate Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', width: '100%' }} // Improved styling
          />
          <input
            type="text"
            placeholder="Enter Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', width: '100%' }} // Improved styling
          />
        </div>

        {/* Logo Uploader and Certificate Template */}
        <LogoUploader setOrgLogo={setOrgLogo} />
        <CertificateTemplate name={name} orgName={orgName} orgLogo={orgLogo} />
      </div>
    </Router>
  );
}

export default App;
