import styles from '../styles/Form.module.css';
import Card from '../components/Card';
import Link from 'next/link';
import InputNumber from '../components/inputNumber';
import { useState } from 'react';

export default function Form() {
  const [qtdPorts, setQtdPorts] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
      <Card bgcolor='#c0392c'>
        <h1>Monty Hall</h1>
      </Card>
      <Card>
        <InputNumber text='Ports Quantity?' value={qtdPorts} onChange={newQtd => setQtdPorts(newQtd)} />
      </Card>
      </div>
      <div>
      <Card>
      <InputNumber text='Port with Gift?' value={withGift} onChange={newPortWithGift => setWithGift(newPortWithGift) }/>
      </Card>
      <Card bgcolor='#28a085'>
        <Link href={`/game/${qtdPorts}/${withGift}`} passHref>
          <h2 className={styles.link}>Start</h2>
        </Link>
      </Card>
      </div>
    </div>  
    );
}
