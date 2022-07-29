import Award from "./Award"
import PressArticle from "./PressArticle"

interface ProjectDetails {
  name: string
  title: string
  graphics?: {
    hero?: boolean
    heroForeground?: boolean
  }
  appearance?: {
    heroHasDarkColour?: boolean
  }
  tint?: string
  description?: string
  foundingYear?: string
  teamSize?: string
  website?: string
  industry?: string
  markets?: string
  role?: string
  pressArticles?: PressArticle[]
  awards?: Award[]
  storyTitle?: string
  story?: string
}

export default ProjectDetails
