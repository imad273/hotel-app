import React from 'react'
import { LoaderCircle } from 'lucide-react'

const LoadingBadge = () => {
  return (
    <div className='absolute left-0 top-0 z-50 backdrop-blur-[3px] rounded w-full bg-white/40 h-full flex justify-center items-center'>
      <LoaderCircle className="animate-spin" size={46} />
    </div>
  )
}

export default LoadingBadge