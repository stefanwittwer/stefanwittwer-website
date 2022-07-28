import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Stefan Wittwer</title>
        <meta
          name="description"
          content="Hi there! I'm Stefan, a designer, developer and startup co-founder from Switzerland."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              className={styles.logo}
              src="/assets/sw-logomark.svg"
              height={38}
              width={68}
              alt="Stefan Wittwer"
            />
          </a>
        </Link>
        <nav role="navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/hello">Get in touch</Link>
        </nav>
      </header>
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
