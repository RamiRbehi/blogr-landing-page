import Future from "@/components/Future";
import HeadTitle from "@/components/HeadTitle";
import Infrastructure from "@/components/Infrastructure";
import Intro from "@/components/Intro";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ResponsiveLinkNav from "@/components/ResponsiveLinkNav";
import Services from "@/components/Services";
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
    <HeadTitle/>
      <Header/>
      <Intro/>
      {/* <ResponsiveLinkNav/> */}
      <Future/>
      <Infrastructure/>
      <Services/>
      <Footer/>
    </div>
  )
}
