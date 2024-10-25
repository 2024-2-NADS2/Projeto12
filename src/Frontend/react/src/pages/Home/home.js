import Header from '../../Components/Header/header'
import Section from '../../Components/Section/section'
import Button from '../../Components/Button/button'
import styles from './home.css'

function Home() {
    return (
        <div>
            <Header>
            </Header>
            <Section sectionColor="section">
                <div className="section-container">
                    <div>
                        <h1>Programar é divertido, programar é inovador</h1>
                        <Button>Comece agora</Button>
                    </div>

                    <div>
                        <h1>img</h1>
                    </div>
                </div>
            </Section>

            <Section sectionColor="section-dark">
                <div className="section-container">
                    <div>
                        <h1>Nossa missão é uma educação para o futuro</h1>
                    </div>
                    <div>
                        <p>Inspirar e capacitar crianças através de experiências tecnológicas divertidas e educativas, desenvolvendo habilidades digitais essenciais e preparando-as para um futuro inovador.</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Home