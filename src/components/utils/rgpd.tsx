import { FC, useEffect, useState } from "react";
import styles from './rgpd.module.scss'

type PropType = {}

const RGPD: FC<PropType> = () => {
    const [visible, setVisible] = useState(true)
    
    useEffect(() => {
        if (!localStorage) return

        const useLocalStorage = localStorage.getItem('useLocalStorage')

        if (useLocalStorage !== null) {
            setVisible(false)
        }
    })

    function handleAgree() {
        setVisible(false)
        localStorage.setItem('useLocalStorage', 'true')
    }

    function handleDisagree() {
        setVisible(false)
    }

    return (
        <div className={`${styles.rgpd} ${(visible) ? styles.visible : ''}`}>
            Do you want to use the local storage of your web browser to save your encounters, for the next time you use this website?
            <div className={styles.buttons}>
                <button onClick={handleAgree}>Yes</button>
                <button onClick={handleDisagree}>No</button>
            </div>
        </div>
    )
}

export default RGPD