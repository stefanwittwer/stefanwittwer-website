import Project from "./model/Project"
import PROJECTS from "./projects.json"

const allProjects = (): Project[] =>
  Object.values(PROJECTS).reduce(
    (accumulator, currentProjects) => [...accumulator, ...currentProjects],
    [],
  )

export default allProjects
