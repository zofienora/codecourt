import Drag from '../assets/drag.png';
import Float from '../assets/float.png';

function Projects() {
    return(
        <div className="container">
            <div className="containerProjects">
                <div className="project">
                    <a href="" className="linkProject">
                        <img src={Drag} alt="" />
                    </a>
                    <p>Drag and Drop</p>
                </div>

                <div className="project">
                    <a href="" className="linkProject">
                        <img src={Float} alt="" />
                    </a>
                    <p>Floating Circle</p>
                </div>

        

            </div>
        </div>
    )


}

export default Projects;

