import classNames from "classnames"
import React from "react"
import CategoryIcon, { CategoryIconName } from "../../presentation/category-icon/CategoryIcon"
import styles from "./GalleryCategoryTag.module.scss"

const GalleryCategoryTitles = {
  design: "Design",
  code: "Code",
  product: "Product",
  business: "Business",
  workflow: "Workflow",
  experiment: "Experiment",
} as const

interface GalleryCategoryTagProps {
  category: string
}

const GalleryCategoryTag = (props: GalleryCategoryTagProps) => (
  <div className={classNames(styles.category, `category-${props.category}`)}>
    <CategoryIcon icon={props.category as CategoryIconName} />
    <span>{GalleryCategoryTitles[props.category] || "Andere"}</span>
  </div>
)

export default GalleryCategoryTag
