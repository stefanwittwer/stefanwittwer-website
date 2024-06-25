import fs from "fs"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import path from "path"
import InfoElement from "../../components/content/info-section/InfoElement"
import InfoSection from "../../components/content/info-section/InfoSection"
import ProjectHero from "../../components/content/project-hero/ProjectHero"
import Publication from "../../components/content/publication/Publication"
import Container from "../../components/layout/container/Container"
import Section from "../../components/layout/section/Section"
import ExternalLink from "../../components/links/ExternalLink"
import Page from "../../components/page/Page"
import allProjects from "../../data/allProjects"
import Project from "../../data/model/Project"
import ProjectDetails from "../../data/model/ProjectDetails"
import styles from "./project-page.module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = allProjects()
  return {
    paths: projects.map((project) => ({ params: { project: project.slug } })),
    fallback: false,
  }
}

interface ProjectPageStaticProps {
  project: Project
  details: ProjectDetails
}

const fetchProjectDetailsFromJSON = (name: string) => {
  const filePath = path.join(process.cwd(), `data/projects/${name}.json`)
  const file = fs.readFileSync(filePath, "utf8")

  if (!file) throw new Error("Could not find project details")
  return JSON.parse(file)
}

export const getStaticProps: GetStaticProps<ProjectPageStaticProps> = async (content) => {
  const { project } = content.params

  const projects = allProjects()
  const foundProject = projects.find((p) => p.slug === project)

  return {
    props: {
      project: foundProject,
      details: fetchProjectDetailsFromJSON(project.toString()),
    },
  }
}

const ProjectPage = (props: ProjectPageStaticProps) => {
  const pageTitle = `${props.project.title} - Stefan Wittwer`
  return (
    <Page
      fill={props.details.graphics?.hero}
      lightHeader={props.details.appearance?.heroHasDarkColour}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={props.project.description} />
      </Head>
      {props.details.graphics?.hero && (
        <ProjectHero
          project={props.project}
          hasForeground={props.details.graphics?.heroForeground}
        />
      )}
      <main className={styles.container}>
        <Container>
          <h1>{props.project.title}</h1>
          {props.project.defunct && <span className={styles.defunct}>{props.project.defunct}</span>}
          <p>{props.details.description}</p>
        </Container>
        <InfoSection>
          <InfoElement title="Founding year">{props.details.foundingYear}</InfoElement>
          <InfoElement title="Industry">{props.details.industry}</InfoElement>
          <InfoElement title="Markets">{props.details.markets}</InfoElement>
          <InfoElement title="Team size">{props.details.teamSize}</InfoElement>
          <InfoElement title="Current role">{props.details.role}</InfoElement>
          <InfoElement title="Parent company">{props.details.partOf}</InfoElement>
          <InfoElement title="Availability">{props.details.availability}</InfoElement>
          <InfoElement title="Category">{props.details.category}</InfoElement>
          <InfoElement title="Created">{props.details.creationYear}</InfoElement>
          <InfoElement title="Platforms">{props.details.platforms}</InfoElement>
        </InfoSection>
        <Container>
          {props.details.story && (
            <Section title={props.details.storyTitle ?? "About this project"}>
              <p>{props.details.story}</p>
            </Section>
          )}
          {props.details.storyLinks && (
            <Section title="Learn more">
              {props.details.storyLinks.map((link) => (
                <p key={link.url}>
                  <ExternalLink href={link.url} tint={props.details.tint}>
                    {link.title}
                  </ExternalLink>
                </p>
              ))}
            </Section>
          )}
          {props.details.publications && (
            <Section title="Publications">
              {props.details.publications.map((publication) => (
                <Publication publication={publication} key={publication.url} />
              ))}
            </Section>
          )}
          {props.details.website && (
            <p>
              <ExternalLink href={props.details.website} tint={props.details.tint}>
                Visit website
              </ExternalLink>
            </p>
          )}
        </Container>
      </main>
    </Page>
  )
}

export default ProjectPage
