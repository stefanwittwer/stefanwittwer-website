import fs from "fs"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import path from "path"
import Container from "../../components/layout/container/Container"
import Page from "../../components/page/Page"
import Project from "../../data/model/Project"
import ProjectDetails from "../../data/model/ProjectDetails"
import AllProjects from "../../data/projects.json"
import styles from "./project-page.module.scss"

const allProjects = (): Project[] =>
  Object.values(AllProjects).reduce(
    (accumulator, currentProjects) => [...accumulator, ...currentProjects],
    [],
  )

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
        <div
          className={styles.hero}
          style={{ backgroundImage: `url('/assets/hero/hero-${props.project.slug}.jpg')` }}
        />
      )}
      <Container className={styles.container}>
        <h1>{props.project.title}</h1>
        <p>{props.details.description}</p>
      </Container>
    </Page>
  )
}

export default ProjectPage
