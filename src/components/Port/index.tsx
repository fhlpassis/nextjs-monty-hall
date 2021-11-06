import styles from './Port.module.css';
import PortModel from '../../model/port';
import Gift from '../Gift'

interface PortProps {
  value: PortModel;
  onChange: (newPort: PortModel) => void;
}

export default function Port(props: PortProps) {
  const port = props.value;
  const portSelected = port.selected && !port.open ? styles.select : ''; 

  const changeSelect = e => props.onChange(port.alterSelect());
  const openPort = e => {
    e.stopPropagation();
    props.onChange(port.openPort());
  }

  function renderPort() {
    return (
        <div className={styles.port}>
          <div className={styles.number}>{port.number}</div>
          <div className={styles.knob} onClick={openPort}></div>
        </div>
    )
  }

  return (
    <div className={styles.area} onClick={changeSelect}>
      <div className={`${styles.frame} ${portSelected}`}>
        {port.closed ? renderPort() : port.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}