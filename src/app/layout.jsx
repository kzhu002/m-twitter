import './globals.css'


export const metadata = {
  title: 'Mtwitter',
  description: 'messaging system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>



        {children}

      </body>
    </html>
  )
}
