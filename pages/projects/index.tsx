import { GetStaticProps, InferGetStaticPropsType } from "next"
import ProjectsList from "../../components/content/projects-list/ProjectsList"
import Page from "../../components/page/Page"
import Project from "../../static/model/Project"
import AllProjects from "../../static/projects/projects.json"
import styles from "./projects.module.scss"

interface ProjectsPageStaticProps {
  projects: {
    startups: Project[]
    other: Project[]
  }
}

export const getStaticProps: GetStaticProps<ProjectsPageStaticProps> = async () => ({
  props: {
    projects: AllProjects,
  },
})

const ProjectsPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page>
    <main>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectsInner}>
          <section>
            <h2>Startups I&apos;ve co-founded</h2>
            <ProjectsList projects={props.projects.startups} />
          </section>
          <section>
            <h2>Apps and other projects</h2>
            <ProjectsList projects={props.projects.other} />
          </section>
        </div>
      </div>
    </main>
  </Page>
)

export default ProjectsPage
