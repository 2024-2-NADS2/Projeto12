import styles from './section.css'

function Section({children, sectionColor}){
    return(
        <div className={sectionColor}>{children}</div>
    )
}

export default Section