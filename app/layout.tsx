import '../styles/globals.css'
import Nav from './nav';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let isLoggedin: boolean = true;

  return (
    <html lang="en">
      <head />
      <body className="bg-white">
        <Nav isLoggedin={isLoggedin}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
