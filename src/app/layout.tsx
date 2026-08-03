import { Inter } from "next/font/google";
import "../styles/index.css";
import "../styles/template-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-theme="teal">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{document.documentElement.dataset.theme=localStorage.getItem("cs-theme")||"teal"}catch(e){}',
          }}
        />
      </head>

      <body suppressHydrationWarning className={inter.className}>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
