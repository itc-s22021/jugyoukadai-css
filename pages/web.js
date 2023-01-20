import styles from '../styles/web.module.css'

export default function Home () {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header_h1}>Sample Website</h1>
      </div>
      <div className={styles.main}>
        <h2 className={styles.main_h2}>Heading</h2>
        <p className={styles.main_p}>
          Content comes here. Content comes here. Content comes here.
          <br /> Content comes here. Content comes here. Content comes here.
        </p>
        <h2 className={styles.main_h2}>Heading 2</h2>
        <p className={styles.main_p}>
          Content comes here. Content comes here. Content comes here.
          <br /> Content comes here. Content comes here. Content comes here.
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.footer_p}>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
      </div>
    </>
  )
}
