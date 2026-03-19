import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Meu portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}