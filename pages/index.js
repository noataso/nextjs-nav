import Link from "next/link";
import styles from "../styles/Home.module.css"
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link>
                    <p className={styles.title}>nav</p>
                </Link>
            </div>
        </div>
    );
}

export default index;