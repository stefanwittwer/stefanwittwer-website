import classNames from "classnames"
import CategoryIcon, { CategoryIconName } from "../category-icon/CategoryIcon"
import styles from "./FilterOption.module.scss"

interface FilterOptionProps {
  icon: CategoryIconName
  title: string
  isActive?: boolean
  onClick?: () => void
}

const FilterOption = (props: FilterOptionProps) => (
  <button
    className={classNames(styles.option, { [styles.active]: props.isActive })}
    onClick={props.onClick}
  >
    <div className={styles.icon}>
      <CategoryIcon icon={props.icon} />
    </div>
    <span>{props.title}</span>
  </button>
)

export default FilterOption
