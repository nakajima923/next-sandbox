import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["header-content"]}>
                <p className={styles["system-title"]}>書籍情報検索システム</p>
                <div className={styles["header-buttons"]}>
                    {/* <p>一覧表示</p>
                    <p>登録</p> */}
                </div>
            </div>
        </header>
    );
}
