import React from 'react'
import Image from 'next/image'
import { IoBrowsersOutline, IoBugSharp, IoCartOutline, IoLogoReact } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline className="w-6 h-6 text-white" />,
    title: 'Dashboard',
    subtitle: 'Data Overview'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCartOutline className="w-6 h-6 text-white" />,
    title: 'Shopping Cart',
    subtitle: 'Client Side Component'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoBugSharp className="w-6 h-6 text-white" />,
    title: 'Pokemons',
    subtitle: 'Static Generation'
  }
]

const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white gap-1">
          <IoLogoReact className="inline-block w-6 h-6" />
          <span>Dashboard</span>
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" width={128} height={80} />
          </span>
          <span className="text-sm md:text-base font-bold">
            John Doe
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
