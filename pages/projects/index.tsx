import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { useEffect, useRef } from "react"
import ProjectsList from "../../components/content/projects-list/ProjectsList"
import Page from "../../components/page/Page"
import allProjects from "../../data/allProjects"
import Groups from "../../data/groups.json"
import Project from "../../data/model/Project"
import Projects from "../../data/projects.json"
import styles from "./projects.module.scss"

interface ProjectsPageStaticProps {
  projects: { [key: string]: Project[] }
  groups: Record<string, string>
  numberOfProjects: number
}

export const getStaticProps: GetStaticProps<ProjectsPageStaticProps> = async () => ({
  props: {
    projects: Projects,
    groups: Groups,
    numberOfProjects: allProjects().length,
  },
})

const ProjectsPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const projectsInnerRef = useRef<HTMLDivElement>(null)
  const pageHeight = props.numberOfProjects * 30

  useEffect(() => {
    const onScroll = () => {
      const translateX =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight + 200)) * 0.925
      projectsInnerRef.current.style.transform = `translateX(-${translateX * 100}%)`
    }
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Page className={styles.page} style={{ height: `${pageHeight}vh` }}>
      <Head>
        <title>Projects - Stefan Wittwer</title>
        <meta
          name="description"
          content="I have co-founded a few startups, notably NextBusiness and Custom (now Rise). You can learn more about apps and education projects I've worked on."
        />
      </Head>
      <main className={styles.main}>
        <div>
          <div className={styles.title}>
            <h1>Projects</h1>
          </div>
          <div className={styles.projects}>
            <div className={styles.projectsInner} ref={projectsInnerRef}>
              {Object.keys(props.groups).map((group) => (
                <section key={group}>
                  <h2>{props.groups[group]}</h2>
                  <ProjectsList projects={props.projects[group]} />
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Page>
  )
}

export default ProjectsPage
