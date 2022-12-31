import CategoryIconAll from "./icons/category-all.svg"
import CategoryIconDesign from "./icons/category-design.svg"
import CategoryIconCode from "./icons/category-code.svg"
import CategoryIconProduct from "./icons/category-product.svg"
import CategoryIconExperiment from "./icons/category-experiment.svg"
import CategoryIconBusiness from "./icons/category-business.svg"
import CategoryIconWorkflow from "./icons/category-workflow.svg"

export type CategoryIconName =
  | "all"
  | "design"
  | "code"
  | "product"
  | "experiment"
  | "business"
  | "workflow"

interface CategoryIconProps {
  icon: CategoryIconName
  className?: string
  size?: number
}

const DEFAULT_ICON_SIZE = 20

const CategoryIcon = (props: CategoryIconProps) => {
  const iconProps = {
    className: props.className,
    width: props.size ?? DEFAULT_ICON_SIZE,
    height: props.size ?? DEFAULT_ICON_SIZE,
    viewBox: "0 0 24 24",
  }
  switch (props.icon) {
    case "all":
      return <CategoryIconAll {...iconProps} />
    case "design":
      return <CategoryIconDesign {...iconProps} />
    case "code":
      return <CategoryIconCode {...iconProps} />
    case "product":
      return <CategoryIconProduct {...iconProps} />
    case "experiment":
      return <CategoryIconExperiment {...iconProps} />
    case "business":
      return <CategoryIconBusiness {...iconProps} />
    case "workflow":
      return <CategoryIconWorkflow {...iconProps} />
    default:
      return null
  }
}

export default CategoryIcon
