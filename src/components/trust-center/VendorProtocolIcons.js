import React from 'react';
import ProtocolSvg from './ProtocolSvg';
import styles from './VendorProtocolIcons.module.css';

const VendorProtocolIcons = ({ mappedProtocols, protocolIds }) => {
  return (
    <div className={styles.container}>
      {protocolIds.map(protocolId => (
        <ProtocolSvg
          key={protocolId}
          protocolName={mappedProtocols[protocolId].name}
        />
      ))}
    </div>
  );
};

export default VendorProtocolIcons;
