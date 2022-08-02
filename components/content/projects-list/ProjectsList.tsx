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
      <Link href={`/projects/${project.slug}`} key={project.slug}>
        <a className={styles.project}>
          <DesignBox className={styles.box}>
            <Image
              src={`/assets/posters/${project.slug}.jpg`}
              width={322}
              height={244}
              layout="responsive"
              alt={project.title}
            />
          </DesignBox>
          <strong className={styles.title}>{project.title}</strong>
          <span className={styles.description}>{project.description}</span>
          {project.defunct && <span className={styles.defunct}>{project.defunct}</span>}
        </a>
      </Link>
    ))}
  </div>
)

export default ProjectsList
