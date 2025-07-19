import styles from "./Inputform.module.css";

type InputProps = {
    inputcontent: string;
};

export default function Inputform({ inputcontent }: InputProps) {
    return (
        <input
            className={styles["search-input"]}
            placeholder={inputcontent}
            type="text"
        />
    );
}
