import React, { useState } from 'react';
import illustration from '../../images/comply/comply-illustration.svg';
import Button from '../buttons/Button';
import { Grid } from '../grid/Grid';
import TextInput from '../forms/TextInput';
import styles from './Calculator.module.css';
import Checkbox from '../shared/Checkbox';

export default () => {
  const [companySize, setCompanySize] = useState(750);
  const [hasSOC, setSOC] = useState(true);
  const [hasISO, setISO] = useState(true);
  const [hasGRCTool, setGRCTool] = useState(true);
  const [vendorCount, setVendorCount] = useState(100);
  const [fteCost, setFTECost] = useState(75);
  const [customerCount, setCustomerCount] = useState(2000);
  const [calculated, setCalculated] = useState(false);

  const protocolCount = [hasSOC, hasISO].filter(a => a).length;
  const existingGrcMultiplier = hasGRCTool ?  1.25 : 1;

  const riskWorkshop = 30 * existingGrcMultiplier;
  const openRooms = .5 * Number(customerCount);
  const legal = 50;
  const policy = 50 * existingGrcMultiplier;
  const incident = 40;
  const training = 40;
  const audit = 300 + (protocolCount - 1) * 100;
  const mappings = 16;
  const assetInventory = (Number(vendorCount) + Number(companySize)) * 2 * .5;

  const soa = hasISO ? 40 : 0;
  const vendorInventory = Number(vendorCount) * 2;
  const evidence = 1000 + protocolCount * 500;
  const acr = Number(vendorCount) * 2 * 4;
  const remediation = 80 * protocolCount;

  const noComply = {
    riskWorkshop,
    openRooms,
    legal,
    policy,
    incident,
    training,
    audit,
    mappings,
    assetInventory,
    soa,
    vendorInventory,
    evidence,
    acr,
    remediation,
  }

  const comply = {
    riskWorkshop: riskWorkshop * .8,
    openRooms: openRooms * .1,
    legal,
    policy: policy * .75,
    incident,
    training: training,
    audit: audit * .75,
    mappings: mappings * .1,
    assetInventory: assetInventory * .25,
    soa: soa * .75,
    vendorInventory: vendorInventory * .75,
    evidence: evidence * .4,
    acr: acr * .5,
    remediation: remediation * .75,
  }

  const noComplySum = Object.values(noComply).reduce((acc, val) => acc + val, 0);
  const complySum = Object.values(comply).reduce((acc, val) => acc + val, 0);

  const onClickCalculated = () => {
    setCalculated(true);
    setTimeout(
      () => document.getElementById('calculator-table').scrollIntoView({ behavior: 'smooth' }),
      100
    )
      
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1 className={styles.headingCell}>
            Aptible Comply
          </h1>
          <h1>
            vs
          </h1>
          <h1 className={styles.headingCell}>
            New Compliance Hires
          </h1>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputCell}>
            <p className="L">Company Size</p>
            <TextInput
              value={companySize}
              changeFn={(val) => setCompanySize(val)}
            />
          </div>

          <div className={styles.inputCell}>
            <p className="L">Number of Vendors</p>
            <TextInput
              value={vendorCount}
              changeFn={(val) => setVendorCount(val)}
            />
          </div>


          <div className={styles.inputCell}>
            <p className="L">Number of Customers</p>
            <TextInput
              value={customerCount}
              changeFn={(val) => setCustomerCount(val)}
            />
          </div>
        </div>
        
        <div className={styles.inputRow}>
          <div className={styles.inputCell}>
            <p className="L">FTE Salary / Hour</p>
            <TextInput
              value={fteCost}
              changeFn={(val) => setFTECost(val)}
            />
          </div>
          
          <div className={styles.inputCell}>
            <p className="L">Current GRC Tool?</p>
            <div>
            <select onclick={() => setGRCTool(true)}>
              <option>Yes</option>
              <option>No (Spreadsheets / Other)</option>
            </select>
            </div>
          </div>

          <div className={styles.inputCell}>
            <p className="L">Protocols</p>
            <div>
              <div onClick={() => setSOC(!hasSOC)}>
                <Checkbox label='SOC 2' checked={hasSOC} />
              </div>
              <div onClick={() => setISO(!hasISO)}>
                <Checkbox label='ISO 27001:2013' checked={hasISO} />
              </div>
            </div>
          </div>
        </div>



        <div className={styles.calculate}>
          <Button onClickFn={onClickCalculated}>Calculate</Button>
        </div>

        {calculated &&
        <div className={styles.flexResults}>
          <div id='calculator-table' className={styles.table}>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p className='L'><b>Annual Audit Activities</b></p>
              </div>
              <div className={styles.column}>
                <p className='L'><b>Hours without Comply</b></p>
              </div>
              <div className={styles.column}>
                <p className='L'><b>Hours with Comply</b></p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Report Distribution</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.openRooms)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.openRooms)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Audit Prep and Meetings</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.audit)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.audit)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Evidence Collection</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.evidence)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.evidence)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Access Control Reviews</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.acr)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.acr)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Asset Inventory</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.assetInventory)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.assetInventory)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Vendor Inventory</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.vendorInventory)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.vendorInventory)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Remediation</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.remediation)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.remediation)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Policy / Procedure Maintenance</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.policy)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.policy)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Compliance Guidance</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.legal)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.legal)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Workforce Training</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.training)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.training)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Incident Response / Business Continuity</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.incident)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.incident)}</p>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Risk Workshop</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.riskWorkshop)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.riskWorkshop)}</p>
              </div>
            </div>
            {hasISO && <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p>Statment of Applicability</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(noComply.soa)}</p>
              </div>
              <div className={styles.column}>
                <p>{Math.round(comply.soa)}</p>
              </div>
            </div>}
            <div className={styles.tableRow}>
              <div className={styles.firstColumn}>
                <p><b>Total Hours</b></p>
              </div>
              <div className={styles.column}>
                <p><b>{Math.round(noComplySum)}</b></p>
              </div>
              <div className={styles.column}>
                <p><b>{Math.round(complySum)}</b></p>
              </div>
            </div>
          </div>
          <div className={styles.results}>
            <h2>You could save</h2>
            <h1 className={styles.savings}>
              {Math.round(noComplySum - complySum).toLocaleString()} hours per year
            </h1>
            <h1 className={styles.savings}>
              ${Math.round((noComplySum - complySum) * fteCost).toLocaleString()} per year
            </h1>
            <h2>with Aptible Comply</h2>
          </div>
        </div>
        }
      </div>
    </div>
  );
};
