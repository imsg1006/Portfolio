import React from 'react' 
import { DraggableCardDemo } from './ui/drag-card'

const Approach = () => {
  return (
      <div className = "py-28" id='approach' >
        <h1 className='heading m-5'>
            My  {' '}
            <span className='text-purple'> Social Handles</span>
        </h1>
     <DraggableCardDemo/>
     </div>
  )
}

export default Approach