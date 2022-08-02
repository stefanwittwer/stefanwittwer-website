import Project from "./model/Project"
import Projects from "./projects.json"

const allProjects = (): Project[] =>
  Object.values(Projects).reduce(
    (accumulator, currentProjects) => [...accumulator, ...currentProjects],
    [],
  )

export default allProjects
