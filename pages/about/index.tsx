import Head from "next/head"
import Container from "../../components/layout/container/Container"
import Section from "../../components/layout/section/Section"
import ExternalLink from "../../components/links/ExternalLink"
import Page from "../../components/page/Page"
import styles from "./about.module.scss"

const AboutPage = () => (
  <Page>
    <Head>
      <title>About me - Stefan Wittwer</title>
      <meta
        name="description"
        content="I'm a product person, building things and startups that help people build more things. Read more about my work here."
      />
    </Head>
    <main>
      <Container>
        <section className={styles.aboutText}>
          <h1>I&apos;m a designer, developer, and startup co-founder from Switzerland.</h1>
          <p>
            I&apos;m a product person, building things and startups that help people build more
            things.
          </p>
          <div className={styles.links}>
            <ExternalLink href="https://twitter.com/Stefan_Wittwer">Twitter</ExternalLink>
            <ExternalLink href="https://github.com/StefanWittwer">GitHub</ExternalLink>
          </div>
        </section>
        <div className={styles.faq}>
          <Section title="What kind of work do you do?">
            <p>
              I&apos;m a generalist, working at the intersection of design and technology – having
              experience in both fields. Most of my time is devoted to product work for my startups.
            </p>
          </Section>
          <Section title="What tools do you use?">
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
          </Section>
          <Section title="Are you available for hire?">
            <p>
              Not currently, no. For design projects, see{" "}
              <ExternalLink href="https://www.nextcreative.ch">NextCreative</ExternalLink>.
            </p>
          </Section>
        </div>
      </Container>
    </main>
  </Page>
)

export default AboutPage
