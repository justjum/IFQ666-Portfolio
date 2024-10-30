import getGit from "../api/github-api"
import { useState, useEffect } from 'react'

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
        <h4>WebDev Placeholder</h4>
        {projects != null ? (
            projects.map((project) => {
                return <>
                    <p>{project.name}</p>
                </>
            })
        ): ""}
    </>
}