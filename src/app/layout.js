import"./globals.css";
import "./fonts.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>
                  {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
