import Drag from '../assets/drag.png';
import Float from '../assets/float.png';

function Projects() {
    return(
        <div className="container">
            <div className="containerProjects">
                <div className="project">
                    <a href="https://draganddropv1.vercel.app/" className="linkProject" target="_blank" rel="noopener noreferrer">
                        <img src={Drag} alt="Drag and Dop Project" />
                    </a>
                    <p>Drag and Drop</p>
                </div>

                <div className="project">
                    <a href="https://calculator-taupe-zeta-28.vercel.app/" className="linkProject" target="_blank" rel="noopener noreferrer">
                        <img src={Float} alt="Floating Circle Project" />
                    </a>
                    <p>Floating Circle</p>
                </div>

        

            </div>
        </div>
    )


}

export default Projects;

