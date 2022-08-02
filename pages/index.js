import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stefan Wittwer</title>
        <meta
          name="description"
          content="Hi there! I'm Stefan, a designer, developer and startup co-founder from Switzerland."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I make things.</h1>
        <video autoPlay loop playsInline muted className={styles.video}>
          <source src="/video/home-logomark-visual.webm" />
        </video>
      </main>
    </div>
  );
};

export default Home;
