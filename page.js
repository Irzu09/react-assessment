// 'use client'
import MainPage from './components/MainPage';
import styles from './page.module.css';
// import dynamic from 'next/dynamic';

// const MyComponent = dynamic(() => import('./components/MyComponent'), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  )
}
