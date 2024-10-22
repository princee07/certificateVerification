// src/CertificateTemplate.js

import React from 'react';
import { FaCertificate } from 'react-icons/fa'; // Importing an icon
import styles from './Certificate1.module.css';

const CertificateTemplate = ({ name, orgName, orgLogo }) => {
  return (
    <div className={styles.certificate}>
      <div className={styles.header}>
        {orgLogo && <img src={orgLogo} alt="Organization Logo" className={styles.orgLogo} />}
        <FaCertificate className={styles.certificateIcon} />
        <h1>Certificate of Achievement</h1>
      </div>
      <p>This is to certify that</p>
      <h2 className={styles.name}>{name}</h2>
      <p>has successfully completed the course</p>
      <p className={styles.date}>
        Given this day of {new Date().toLocaleDateString()}
      </p>
      <div className={styles.signature}>
        <p>_______________________</p>
        <p>Signature</p>
      </div>
    </div>
  );
};

export default CertificateTemplate;
