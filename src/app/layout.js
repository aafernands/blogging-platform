import '../styles/globals.css';
import NavBar from "../components/NavBar.js"; 

import Footer from "../components/Footer"; 

export const metadata = {
  title: 'Blogging App',
  description: 'Created by FNDS Labs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>
                < NavBar />

        </nav>

        {children}



      < Footer />
      </body>
    </html>
  )
}
