// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Layout Sample",
  description: "Demo of layout.tsx and globals.css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ marginBottom: "20px", borderBottom: "1px solid #ccc",textAlign:"center"}}>
          <h1>🌐 This is Layout Header (共通ヘッダー)</h1>
        </header>
        <main style={{textAlign:"center"}}>{children}</main>
        <footer style={{ marginTop: "20px", borderTop: "1px solid #ccc",textAlign:"center" }}>
          <p>© 2025 Example Footer</p>
        </footer>
      </body>
    </html>
  );
}
