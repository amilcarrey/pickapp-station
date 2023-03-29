import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gradient-to-b from-[#ff9900] to-[#bf8835e0]'>
          {children}
      </body>
    </html>
  )
}