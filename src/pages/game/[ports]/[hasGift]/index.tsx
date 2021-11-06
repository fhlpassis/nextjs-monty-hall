import styles from '../../../../styles/Game.module.css';
import { useEffect, useState } from 'react';
import Port from '../../../../components/Port'
import { createPorts, updatePorts } from '../../../../functions/ports';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Game() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const ports = +router.query.ports;
    const hasGift = +router.query.hasGift;

    const qtdValidPorts = ports >= 3 && ports <= 100;
    const withValidGift = hasGift >= 1 && hasGift <= ports;


    setValid(qtdValidPorts && withValidGift);
  }, [ports, router.query.ports, router.query.hasGift]);

  useEffect(() => {
    const ports = +router.query.ports;
    const hasGift = +router.query.hasGift;
    setPorts(createPorts(ports, hasGift));
  }, [router?.query])

  function renderPorts() {
    return valid && ports.map(port => {
      return <Port key={port.number} value={port} onChange={newPort => setPorts(updatePorts(ports, newPort))} />
    })
  }

  return (
    <div id={styles.game}>
      <div className={styles.ports}>
        {valid ? renderPorts() : 
        <h1>Values not supported!</h1>}
        </div>
      <div className={styles.buttons}>
        <Link href='/' passHref>
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}