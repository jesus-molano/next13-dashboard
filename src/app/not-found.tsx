import { Sidebar } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col flex-1 justify-center items-center'>
          <h1 className='text-6xl font-bold'>404</h1>
          <h2 className='text-4xl font-bold'>Page not found</h2>
          <p className='text-2xl'>
            <Link href='/'>
              <span className='text-blue-600 hover:underline'>Go back home</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
