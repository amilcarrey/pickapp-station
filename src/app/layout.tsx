import './globals.css'
import { Noto_Sans } from '@next/font/google'
const font = Noto_Sans({
   subsets: ['latin'],
   variable: '--font',
   weight: '300',
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="es" className={font.variable}>
         <head />
         <body className="dark">{children}</body>
      </html>
   )
}
