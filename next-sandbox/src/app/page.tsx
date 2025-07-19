import Message from "@/components/Message";

// app/page.tsx
export default function Home() {
  return (
    <div>
      <h2>🚀 This is Home Page (個別ページ)</h2>
      <p>Hello, this content is provided by <code>page.tsx</code>.</p>

      <Message />
    </div>
  );
}
