import { Inter } from 'next/font/google'
import Heading from './components/LargeHeading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-red-600">
      {/* Only For Checking it, will be removed later  */}
      <Heading>
        Name Similarity API
      </Heading>
    </main>
  )
}
