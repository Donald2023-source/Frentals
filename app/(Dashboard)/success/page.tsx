import React from 'react'
import SucessContainer from '@/app/Components/SucessContainer'
interface Props {
    searchParams: {
        session_id: string | null
    }
}
const page = ({searchParams}: Props) => {

    const id = searchParams?.session_id
    
  return (
    <div>
      <SucessContainer id={id} />
    </div>
  )
}

export default page
