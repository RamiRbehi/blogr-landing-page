import Image from "next/image"
import styles from "../styles/Services.module.css"

const Services = () => {
  return (
    <div className={styles.container}>
          <div className={styles.left}>
            <Image src="/assets/illustration-laptop-desktop.svg" height={400} width={500} alt="laptop"/>
          </div>
          <div className={styles.right}>
            <h3 className={styles.title3}>Free, open, simple</h3>
            <p className={styles.description}>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            <h3 className={styles.title3}>Poweful tooling</h3>
            <p className={styles.description}>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </div>
    </div>
  )
}

export default Services