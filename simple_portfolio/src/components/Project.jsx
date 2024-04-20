import React from 'react'
import Card from './Card'

function Project() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h3 className='text-4xl font-semibold pt-10 '>My projects</h3>
        <div className='flex flex-col md:grid grid-cols-3 gap-6 p-10'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Project