import Github from '../images/github.svg'
import OpenPage from '../images/open-in-new.svg'

export default function ProjectCard({project}) {
    return  <>
                <div className={`card project-${project.id}`}>
                    <img src="project." alt="" />
                    <div className="card-body">
                        <div className="card-title">
                            <p>{project.name}</p>
                        </div>
                        <div className="card-text">
                            {project.description}
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href={project.html_url} target='_blank'>
                            <img className="icon" src={Github} alt="" />
                        </a>
                        <a href="">
                            <img className="icon" src={OpenPage} alt="" />
                        </a>
                        
                    </div>
                    
                </div>
                
            </>
}