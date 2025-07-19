import Message from "@/components/Message";
import Card from "@/components/card/Card"
import Inputform from "@/components/inputform/Inputform"
import styles from "./Page.module.css";
import { styleText } from "util";

// app/page.tsx
export default function Home() {
  return (
    <div>
      <h2>🚀 This is Home Page (個別ページ)</h2>
      <p>Hello, this content is provided by <code>page.tsx</code>.</p>

      <Message title="お知らせ" content="これは動的メッセージです。" />

      <div>
        <Inputform inputcontent="タイトル"/>
        <Inputform inputcontent="著者"/>
        <Inputform inputcontent="出版社"/>
        <Inputform inputcontent="棚"/>
        <Inputform inputcontent="ISBN"/>
      </div>
      

      <div className={styles.cardContent}>
        <Card title = "hogehoge" description="foobar"/>
        <Card title = "hogehoge1" description="foobar1"/>
        <Card title = "hogehoge2" description="foobar2"/>
      </div>

    </div>
  );
}
