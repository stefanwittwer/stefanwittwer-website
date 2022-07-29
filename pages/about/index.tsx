import Head from "next/head"
import Container from "../../components/container/Container"
import FAQBlock from "../../components/faq-block/FAQBlock"
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
      <Container>
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
          <FAQBlock title="What kind of work do you do?">
            <p>
              I&apos;m a generalist, working at the intersection of design and technology – having
              experience in both fields. Most of my time is devoted to product work for my startups.
            </p>
          </FAQBlock>
          <FAQBlock title="What tools do you use?">
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
          </FAQBlock>
          <FAQBlock title="Are you available for hire?">
            <p>
              Not currently, no. For design projects, see{" "}
              <ExternalLink href="https://www.nextcreative.ch">NextCreative</ExternalLink>.
            </p>
          </FAQBlock>
        </div>
      </Container>
    </main>
  </div>
)

export default AboutPage
