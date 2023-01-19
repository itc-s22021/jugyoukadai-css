import styles from '../styles/web.hero.module.css'

export default function Hero () {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h2 className={styles.h2}>Heading</h2>
        <p className={styles.p}>
          Content comes here. Content comes here. Content comes here.
          <br /> Content comes here. Content comes here. Content comes here.
        </p>
        <h2 className={styles.h2}>Heading 2</h2>
        <p className={styles.p}>
          Content comes here. Content comes here. Content comes here.
          <br /> Content comes here. Content comes here. Content comes here.
        </p>
      </div>
    </main>
  )
}
