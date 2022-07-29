import Image from "next/image"
import { useEffect } from "react"
import Project from "../../../data/model/Project"
import styles from "./ProjectHero.module.scss"

interface ProjectHeroProps {
  project: Project
  hasForeground?: boolean
}

const ProjectHero = (props: ProjectHeroProps) => {
  useEffect(() => {
    const HERO_SCROLL_THRESHOLD = 320
    const SCROLLED_PAST_HERO_CLASS_NAME = "scrolled-past-hero"

    const onScroll = () => {
      if (window.scrollY > HERO_SCROLL_THRESHOLD) {
        document.body.classList.add(SCROLLED_PAST_HERO_CLASS_NAME)
      } else {
        document.body.classList.remove(SCROLLED_PAST_HERO_CLASS_NAME)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
      document.body.classList.remove(SCROLLED_PAST_HERO_CLASS_NAME)
    }
  }, [])
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url('/assets/hero/backdrop-${props.project.slug}.png')` }}
    >
      {props.hasForeground && (
        <Image
          src={`/assets/hero/foreground-${props.project.slug}.png`}
          width={420}
          height={150}
          alt={props.project.title}
        />
      )}
    </div>
  )
}

export default ProjectHero
