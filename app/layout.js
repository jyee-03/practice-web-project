import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: "Jordan's Practice Website",
    description: 'A simple website I built to learn Next.js',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <header>
                <nav className='navbar'>
                    <div>
                        <h1 className='logo'>Jordan's Practice Website &#x1F60E;</h1>
                    </div>
                    <div className='nav-links'>
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/fruit-quiz'>Fruit Quiz!</Link>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </body>
      </html>
    )
  }