import './globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'Parking Bot',
  description: 'Відображення стану паркувальних майданчиків',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>{children}</main>
	<Footer />
      </body>
    </html>
  );
}
