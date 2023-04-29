import Image from "next/image"
import styles from "../styles/Infrastructure.module.css"

const Infrastructure = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image className={styles.phones} src="/assets/illustration-phones.svg" width={500} height={500} alt="phones illustration"/>
        </div>
        <div className={styles.right}>
            <h3 className={styles.title3}>State of the Art Infrastructure</h3>
            <p className={styles.description}>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
    </div>
  )
}

export default Infrastructure