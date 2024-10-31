import Header from '../../Components/Header/header'
import Button from '../../Components/Button/button'
import styles from './home.css'
import imgBanner from '../../images/criancas-no-pc.png'

function Home() {
    return (
        <div>
            <Header>
            </Header>
            <div className="section" sectionColor="section">
                <div className="section-container">
                    <div>
                        <h1>Programar é divertido, programar é inovador</h1>
                        <Button>Comece agora</Button>
                    </div>

                    <div>
                        <img src={imgBanner}></img>
                    </div>
                </div>
            </div>

            <div className="section" sectionColor="section-dark">
                <div className="section-container">
                    <div>
                        <h1>Nossa missão é uma educação para o futuro</h1>
                    </div>
                    <div>
                        <p>Inspirar e capacitar crianças através de experiências tecnológicas divertidas e educativas, desenvolvendo habilidades digitais essenciais e preparando-as para um futuro inovador.</p>
                    </div>
                </div>
            </div>

            <div className="section" sectionColor="section">
                   <div className="section-container">
                    <div>
                        <h1>Nossa missão é uma educação para o futuro</h1>
                    </div>
                    <div>
                        <p>Inspirar e capacitar crianças através de experiências tecnológicas divertidas e educativas, desenvolvendo habilidades digitais essenciais e preparando-as para um futuro inovador.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home