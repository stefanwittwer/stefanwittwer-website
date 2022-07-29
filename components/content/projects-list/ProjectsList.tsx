import Project from "../../../static/model/Project"
import DesignBox from "../../presentation/design-box/DesignBox"
import styles from "./ProjectsList.module.scss"

interface ProjectsListProps {
  projects: Project[]
}

const ProjectsList = (props: ProjectsListProps) => (
  <div className={styles.projects}>
    {props.projects.map((project) => (
      <div className={styles.project} key={project.slug}>
        <DesignBox className={styles.box} />
        <strong className={styles.title}>{project.title}</strong>
        <span className={styles.description}>{project.description}</span>
        {project.defunct && <span className={styles.defunct}>{project.defunct}</span>}
      </div>
    ))}
  </div>
)

export default ProjectsList
