import Head from "next/head"
import Header from "../../components/header/Header"
import ExternalLink from "../../components/links/ExternalLink"
import styles from "./about.module.scss"

const AboutPage = () => (
  <div>
    <Head>
      <title>About me - Stefan Wittwer</title>
      <meta
        name="description"
        content="Hi there! I'm Stefan, a designer, developer and startup co-founder from Switzerland."
      />
    </Head>
    <Header />
    <main>
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <h1>I&apos;m a designer, developer, and startup co-founder from Switzerland.</h1>
          <p>
            I&apos;m a product person, building things and startups that help people build more
            things.
          </p>
          <div className={styles.links}>
            <ExternalLink href="https://twitter.com/Stefan_Wittwer">Twitter</ExternalLink>
            <ExternalLink href="https://github.com/StefanWittwer">GitHub</ExternalLink>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faqBlock}>
            <h2>What kind of work do you do?</h2>
            <p>
              I&apos;m a generalist, working at the intersection of design and technology – having
              experience in both fields. Most of my time is devoted to product work for my startups.
            </p>
          </div>
          <div className={styles.faqBlock}>
            <h2>What tools do you use?</h2>
            <p>
              The most important tool I use is the excellent{" "}
              <ExternalLink href="https://www.culturedcode.com/">Things 3</ExternalLink>, which
              allows me to bring the{" "}
              <ExternalLink href="https://gettingthingsdone.com/">GTD methodology</ExternalLink>{" "}
              into practice.
            </p>
            <p>
              For human interface design, I use{" "}
              <ExternalLink href="https://www.sketch.com">Sketch</ExternalLink> and{" "}
              <ExternalLink href="https://www.figma.com">Figma</ExternalLink>. And for development,
              I use Microsoft&apos;s{" "}
              <ExternalLink href="https://code.visualstudio.com/">Visual Studio Code</ExternalLink>.
            </p>
          </div>
          <div className={styles.faqBlock}>
            <h2>Are you available for hire?</h2>
            <p>
              Not currently, no. For design projects, see{" "}
              <ExternalLink href="https://www.nextcreative.ch">NextCreative</ExternalLink>.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default AboutPage
