import Head from "next/head";
import Header from "../components/header/Header";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Stefan Wittwer</title>
        <meta
          name="description"
          content="Hi there! I'm Stefan, a designer, developer and startup co-founder from Switzerland."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>I make things.</h1>
          <video
            autoPlay
            loop
            playsInline
            muted
            className={styles.video}
            width={850}
            height={550}
          >
            <source src="/video/home-logomark-visual.webm" />
          </video>
        </main>
      </div>
    </div>
  );
};

export default Home;
