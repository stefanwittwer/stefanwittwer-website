import Link from "next/link";
import React from "react";
import Header from "../../components/header/Header";
import styles from "./about.module.scss";

const AboutPage = () => (
  <div>
    <Header />
    <main className={styles.aboutText}>
      <h1>
        I&apos;m a designer, developer, and startup co-founder from Switzerland.
      </h1>
      <p>
        I&apos;m a product person, building things and startups that help people
        build more things.
      </p>
      <div className={styles.links}>
        <a
          href="https://twitter.com/Stefan_Wittwer"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/StefanWittwer"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </main>
  </div>
);

export default AboutPage;
