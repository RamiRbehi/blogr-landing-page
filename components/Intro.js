import styles from "../styles/Intro.module.css"

const Intro = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>A modern publishing platform</h1>
        <p className={styles.description}>Grow your audience and build your online brand</p>
        <div className={styles.buttonWrapp}>
            <button className={styles.buttonStart}>Start for free</button>
            <button className={styles.buttonLearn}>Learn more</button>
        </div>
    </div>
  )
}

export default Intro