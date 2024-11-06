import React from 'react';
import { FC, PropsWithChildren } from 'react'

const SectionInner:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='container mx-auto px-6 md:px-10'>
      {children}
    </div>
  )
}

export default SectionInner
