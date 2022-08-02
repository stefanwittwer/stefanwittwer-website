import Head from "next/head"
import Page from "../components/page/Page"
import styles from "./index.module.scss"

const Home = () => {
  return (
    <Page fill>
      <Head>
        <title>Stefan Wittwer - Designer, developer and startup co-founder</title>
        <meta
          name="description"
          content="Hi there! I'm Stefan, a designer, developer and startup co-founder from Switzerland."
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>I make things.</h1>
          <video autoPlay loop playsInline muted className={styles.video} width={850} height={550}>
            <source src="/video/home-logomark-visual.webm" type="video/webm" />
            <source src="/video/home-logomark-visual.mp4" type="video/mp4" />
          </video>
        </main>
      </div>
    </Page>
  )
}

export default Home
