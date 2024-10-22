import React, { useState } from 'react'; // Import useState
import './App.css';
import CertificateTemplate from './components/Certificates/CertificateTemp1/Certificate1'; // Make sure the path is correct
import LandingPage from './components/LandingPage/LandingPage';
import NavbarTemp from './components/Navbars/NavabrTemp/NavbarTemp';
import LogoUploader from './components/Certificates/CertificateTemp1/LogoUpload';

const App = () => {
  const [name, setName] = useState('John Doe'); // Replace with actual name input
  const [orgName, setOrgName] = useState('Organization Name'); // Replace with actual organization name input
  const [orgLogo, setOrgLogo] = useState(null);

  return (
    <div className="App">
      <NavbarTemp />
      <LandingPage />

      {/* Add input fields for name and organization name */}
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          placeholder="Enter Candidate Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Organization Name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
      </div>

      {/* Logo Uploader and Certificate Template */}
      <LogoUploader setOrgLogo={setOrgLogo} />
      <CertificateTemplate name={name} orgName={orgName} orgLogo={orgLogo} />
    </div>
  );
}

export default App;
