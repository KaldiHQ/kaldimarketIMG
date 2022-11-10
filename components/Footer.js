import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/logoicon.png" alt="KaldiMarket Logo" className={styles.logo} />
        <p> | “KaldiMarket” is a registered trademark of KaldiMarket, Inc. Copyright © 2022 KaldiMarket, Inc. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
