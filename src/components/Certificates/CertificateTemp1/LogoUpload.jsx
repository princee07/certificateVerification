// src/LogoUploader.js

import React, { useState } from 'react';

const LogoUploader = ({ setOrgLogo }) => {
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOrgLogo(reader.result); // Set the logo in the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleLogoUpload} />
    </div>
  );
};

export default LogoUploader;
