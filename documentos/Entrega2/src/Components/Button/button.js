import styles from './button.css'

function Button({children}) {
    return (
        <button className="button">
            <span>{children}</span>
        </button>
    )
}

export default Button