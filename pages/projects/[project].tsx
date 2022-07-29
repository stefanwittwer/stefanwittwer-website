import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Container from "../../components/layout/container/Container"
import Page from "../../components/page/Page"
import Project from "../../data/model/Project"
import AllProjects from "../../data/projects/projects.json"

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
}

export const getStaticProps: GetStaticProps<ProjectPageStaticProps> = async (content) => {
  const { project } = content.params

  const projects = allProjects()
  const foundProject = projects.find((p) => p.slug === project)

  return {
    props: {
      project: foundProject,
    },
  }
}

const ProjectPage = (props: ProjectPageStaticProps) => {
  const pageTitle = `${props.project.title} - Stefan Wittwer`
  return (
    <Page>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={props.project.description} />
      </Head>
      <Container>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
      </Container>
    </Page>
  )
}

export default ProjectPage
