import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function Brochure() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brochure | Hans Steel</title>
        <meta name="description" content="View our brochure for Hans Steel products and services" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Brochure</h1>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.card}>
              <Image 
                src="/placeholder.png" 
                alt={`Placeholder ${item}`} 
                width={300} 
                height={200} 
                layout="responsive"
              />
              <p className={styles.description}>Placeholder {item}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}