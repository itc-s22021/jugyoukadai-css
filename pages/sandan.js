import styles from '../styles/sandan.module.css'

export default function Home () {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Prep Mart</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <h2 className={styles.meat}>Meat</h2>
          <ul className={styles.menu}>
            <li className={styles.syohin}>Beef</li>
            <li className={styles.syohin}>Chicken</li>
            <li className={styles.syohin}>Other</li>
          </ul>
        </li>
        <li className={styles.li}>
          <h2 className={styles.fish}>Fish</h2>
          <ul className={styles.menu}>
            <li className={styles.syohin}>Tuna</li>
            <li className={styles.syohin}>Shrimp</li>
            <li className={styles.syohin}>Other</li>
          </ul>
        </li>
        <li className={styles.li}>
          <h2 className={styles.vegetable}>Vegetable</h2>
          <ul className={styles.menu}>
            <li className={styles.syohin}>Tomato</li>
            <li className={styles.syohin}>Lettuce</li>
            <li className={styles.syohin}>Other</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
