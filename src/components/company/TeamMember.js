import React from 'react';
import styles from './TeamMember.module.css';

function Action({ open }) {
  if (open) {
    return (
      <svg
        width="25"
        height="2"
        viewBox="0 0 25 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9993 2.00022H0.999277L0.916016 0.00195312H24.916L24.9993 2.00022Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9993 11.0017V0L12.001 0.0832611V11.0017H0.916016L0.999277 13H12.001V24.0833L13.9993 24V13H24.9993L24.916 11.0017H13.9993Z"
        />
      </svg>
    );
  }
}

export default ({ member, clickFn, open }) => (
  <div
    className={`${styles.teamMember} ${open ? styles.open : ''}`}
    onClick={clickFn}
  >
    <h5>{member.name}</h5>
    <div className={styles.title}>
      <h6 className="small">{member.jobTitle}</h6>
    </div>
    <div className={styles.action}>
      <Action open={open} />
    </div>
    <div className={styles.photo}>
      {member.funPhoto && (
        <div className={styles.funPhoto}>
          <img src={member.funPhoto.file.url} alt={member.name} />
        </div>
      )}
      <img src={member.professionalPhoto.file.url} alt={member.name} />
    </div>
    <div className={styles.bio}>
      <p className="L">{member.bio.bio}</p>
    </div>
  </div>
);
