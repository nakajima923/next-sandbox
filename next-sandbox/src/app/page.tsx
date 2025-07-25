import Message from "@/components/Message";
import Card from "@/components/card/Card"
import Inputform from "@/components/inputform/Inputform"
import styles from "./Page.module.css";
import { styleText } from "util";

// app/page.tsx
export default function Home() {
  return (
    <div>
      {/* <Message title="お知らせ" content="これは動的メッセージです。" /> */}

    <div className={styles.inputContainer}>
      <div className={`${styles.inputall} ${styles.inputBox}`}>
        <h2>書籍情報表示</h2>
        <div className={styles.inputformContent}>
          <div className={styles.inputContent}><Inputform inputcontent="タイトル"/></div>
          <div className={styles.inputContent}><Inputform inputcontent="著者"/></div>
          <div className={styles.inputContent}><Inputform inputcontent="出版社"/></div>
          <div className={styles.inputContent}><Inputform inputcontent="棚"/></div>
          <div className={styles.inputContent}><Inputform inputcontent="ISBN"/></div>
        </div>
        <button className={styles.inputButton}>検索</button>
      </div>

      <div className={`${styles.inputall} ${styles.resultBox}`}>
        <h2>検索結果</h2>
          <table className={styles.resultTable}>
    <thead>
      <tr>
        <th>タイトル</th>
        <th>著者</th>
        <th>出版社</th>
        <th>棚</th>
        <th>ISBN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>君たちはどう生きるか</td>
        <td>吉野源三郎</td>
        <td>岩波文庫</td>
        <td>A-01</td>
        <td>9784003315819</td>
      </tr>
      <tr>
        <td>1Q84 Book1</td>
        <td>村上春樹</td>
        <td>新潮社</td>
        <td>B-03</td>
        <td>9784103534229</td>
      </tr>
      <tr>
        <td>世界のエリートはなぜ...</td>
        <td>山口周</td>
        <td>光文社新書</td>
        <td>C-07</td>
        <td>9784334039826</td>
      </tr>
    </tbody>
  </table>

      </div>
    </div>

{/* 
      <div className={styles.cardContent}>
        <Card title = "hogehoge" description="foobar"/>
        <Card title = "hogehoge1" description="foobar1"/>
        <Card title = "hogehoge2" description="foobar2"/>
      </div> */}

    </div>
  );
}
