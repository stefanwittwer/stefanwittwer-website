import Image from "next/image"
import Link from "next/link"
import Project from "../../../data/model/Project"
import DesignBox from "../../presentation/design-box/DesignBox"
import styles from "./ProjectsList.module.scss"

interface ProjectsListProps {
  projects: Project[]
}

const ProjectsList = (props: ProjectsListProps) => (
  <div className={styles.projects}>
    {props.projects.map((project) => (
      <Link href={`/work/${project.slug}`} key={project.slug} className={styles.project}>
        <DesignBox className={styles.box}>
          <Image src={`/assets/posters/${project.slug}.jpg`} fill alt={project.title} />
        </DesignBox>
        <strong className={styles.title}>{project.title}</strong>
        <span className={styles.description}>{project.description}</span>
        {project.defunct && <span className={styles.defunct}>{project.defunct}</span>}
      </Link>
    ))}
  </div>
)

export default ProjectsList
