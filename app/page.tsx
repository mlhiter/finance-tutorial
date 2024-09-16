import { Button } from '@/components/ui/button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Button variant={'blue'}>Click me</Button>
}
