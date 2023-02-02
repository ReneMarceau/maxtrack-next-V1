import '../styles/globals.css'
import Nav from 'app/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let isLoggedin: boolean = false;

  return (
    <html lang="en">
      <head />
      <body className=' bg-white'>
        <Nav isLoggedin={isLoggedin}/>
        {children}
      </body>
    </html>
  )
}
