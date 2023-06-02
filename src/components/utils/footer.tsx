import { FC } from "react";
import styles from './footer.module.scss'

const Footer:FC<{}> = ({}) => {
    return (
        <div className={styles.footer}>
            <span className={styles.legal}>
                BattleSim is a 5e combat simulator by Trekiros. BattleSim is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
            </span>
            <span className={styles.socials}>
                <a href="https://youtube.com/@trekiros" target="_blank">
                    <img src="/socials/youtube.svg" alt="Youtube" />
                </a>
                <a href="https://discord.gg/9AJtv5DJ6f" target="_blank">
                    <img src="/socials/discord.svg" alt="Discord" />
                </a>
                <a href="https://twitter.com/trekiros" target="_blank">
                    <img src="/socials/twitter.svg" alt="Twitter" />
                </a>
            </span>
        </div>
    )
}

export default Footer