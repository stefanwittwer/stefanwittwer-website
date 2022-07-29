import { GetStaticProps, InferGetStaticPropsType } from "next"
import ProjectsList from "../../components/content/projects-list/ProjectsList"
import Page from "../../components/page/Page"
import Project from "../../data/model/Project"
import AllGroups from "../../data/projects/groups.json"
import AllProjects from "../../data/projects/projects.json"
import styles from "./projects.module.scss"

interface ProjectsPageStaticProps {
  projects: { [key: string]: Project[] }
  groups: Record<string, string>
}

export const getStaticProps: GetStaticProps<ProjectsPageStaticProps> = async () => ({
  props: {
    projects: AllProjects,
    groups: AllGroups,
  },
})

const ProjectsPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page className={styles.page}>
    <main>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectsInner}>
          {Object.keys(props.groups).map((group) => (
            <section key={group}>
              <h2>{props.groups[group]}</h2>
              <ProjectsList projects={props.projects[group]} />
            </section>
          ))}
        </div>
      </div>
    </main>
  </Page>
)

export default ProjectsPage
