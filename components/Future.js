import Image from "next/image"
import styles from "../styles/Future.module.css"

const Future = () => {
  return (
    <div className={styles.container}>
        <h2  className={styles.title2}>Designed for the future</h2>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h3 className={styles.title3}>Introduce an extensible editor</h3>
                <p className={styles.description}>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                <h3 className={styles.title3}>Robust content management</h3>
                <p className={styles.description}>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
            <div className={styles.right}>
                <Image className={styles.editorDesktop} src="/assets/illustration-editor-desktop.svg" width={500} height={400} alt="illustration editor desktop"/>
                <Image className={styles.editorMobile} src="/assets/illustration-editor-mobile.svg" width={500} height={400} alt="illustration editor mobile"/>
            </div>
        </div>
    </div>
  )
}

export default Future