import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/logoicon.png" alt="KaldiMarket Logo" className={styles.logo} />
      </footer>
    </>
  )
}
