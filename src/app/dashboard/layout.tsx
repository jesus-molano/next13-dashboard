import React from 'react'
import { Sidebar } from '@/components'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className='p-2 text-slate-900 w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
