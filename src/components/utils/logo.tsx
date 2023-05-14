import { FC } from "react"
import styles from './logo.module.scss'

type PropType = {
    // TODO
}

const Logo: FC<PropType> = (props) => {
    return (
        <div className={styles.logo}>
            
        <div className={styles.bookContainer}>
                <div className={styles.book}></div>
        
                <div className={styles.corner}></div>
                <div className={styles.corner}></div>
                <div className={styles.corner}></div>
                <div className={styles.corner}></div>
        
                <div className={styles.rim}>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className={styles.ribbonContainer}>
                    <div className={styles.ribbon}></div>
                </div>
            </div>

            <div className={styles.playBtnContainer}>
                <div className={styles.playBtn}></div>
            </div>
        </div>
    )
}

export default Logo