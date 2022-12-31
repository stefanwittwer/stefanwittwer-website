import classNames from "classnames"
import Link from "next/link"
import { MouseEventHandler } from "react"
import CategoryIcon, { CategoryIconName } from "../../presentation/category-icon/CategoryIcon"
import styles from "./GalleryItem.module.scss"

interface GalleryItemProps {
  slug: string
  title: string
  description: string
  category: string
  publishedOn: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const GalleryCategoryTitles = {
  design: "Design",
  code: "Code",
  product: "Product",
  business: "Business",
  workflow: "Workflow",
  experiment: "Experiment",
} as const

const GalleryItem = (props: GalleryItemProps) => (
  <Link href={`/gallery/${props.slug}`} className={styles.item} onClick={props.onClick}>
    <div className={styles.image} />
    <div className={styles.depiction}>
      <div className={classNames(styles.category, `category-${props.category}`)}>
        <CategoryIcon icon={props.category as CategoryIconName} />
        <span>{GalleryCategoryTitles[props.category] || "Andere"}</span>
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  </Link>
)

export default GalleryItem
