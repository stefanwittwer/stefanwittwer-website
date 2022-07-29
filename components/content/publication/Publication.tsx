import IPublication from "../../../data/model/Publication"
import styles from "./Publication.module.scss"

interface PublicationProps {
  publication: IPublication
}

const Publication = (props: PublicationProps) => (
  <a className={styles.publication} href={props.publication.url} target="_blank" rel="noreferrer">
    <div className={styles.metadata}>
      <span className={styles.source}>{props.publication.source}</span>
      <span className={styles.date}>{props.publication.date}</span>
    </div>
    <h3 className={styles.title}>{props.publication.title}</h3>
  </a>
)

export default Publication
