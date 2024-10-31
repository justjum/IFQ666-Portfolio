import getGit from "../api/github-api"
import { useState, useEffect } from 'react'
import ProjectCard from "./projectcard";

export default function WebDev() {
    const [projects, setProjects] = useState(null)

    async function updateProjects() {
        const res = await getGit();
        setProjects(res);
    }

    useEffect(() => {
        updateProjects();
    }, [])

 

    return <>
        <h2>Web Development</h2>
        <div className="projects">
            {projects != null ? (
                projects.map((project) => {
                    return <>
                        <ProjectCard project={project} />
                    </>
                })
            ): ""}
        </div>

    </>
}