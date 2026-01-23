import './globals.css'

export const metadata = {
  title: 'Lucy // Cyberpunk',
  description: 'Minimal cyberpunk themed Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
