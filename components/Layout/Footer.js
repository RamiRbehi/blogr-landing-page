import Image from "next/image"
import styles from "../../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
        <Image className={styles.logoImage} src="/assets/logo.svg" width={70} height={25} alt="logo"/>
        </div>
        <div className={styles.product}>
            <ul className={styles.listItems}>
                <span>product</span>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
        </div>
        <div className={styles.company}>
            <ul className={styles.listItems}>
                <span>Company</span>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
             </ul>
        </div>
        <div className={styles.connect}>
            <ul className={styles.listItems}>
                <span>Connect</span>
                <li>Contact</li>
                <li>Newletter</li>
                <li>Linkedin</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer