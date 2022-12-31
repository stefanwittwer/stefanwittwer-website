import { CategoryIconName } from "../category-icon/CategoryIcon"
import FilterOption from "./FilterOption"
import styles from "./Filters.module.scss"

export interface IFilterOption {
  icon: CategoryIconName
  title: string
  value: any
}

interface FiltersProps {
  options: IFilterOption[]
  currentFilter: any
  onChange: (filter: any) => void
}

const Filters = (props: FiltersProps) => (
  <div className={styles.filters}>
    <FilterOption
      icon="all"
      title="All"
      isActive={!props.currentFilter}
      onClick={() => props.onChange(null)}
    />
    {props.options.map((option) => (
      <FilterOption
        key={option.value}
        icon={option.icon}
        title={option.title}
        isActive={option.value === props.currentFilter}
        onClick={() => props.onChange(option.value)}
      />
    ))}
  </div>
)

export default Filters
