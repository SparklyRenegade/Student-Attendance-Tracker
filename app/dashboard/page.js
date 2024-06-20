"use client"
import { useTheme } from 'next-themes'
import React from 'react'

function Dashboard() {
    const { setTheme } = useTheme()

    useEffect(()=>{
        setTheme('dark');
    })


  return (
    <div>page</div>
  )
}

export default Dashboard