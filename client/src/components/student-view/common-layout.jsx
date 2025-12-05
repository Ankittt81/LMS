import React from 'react'
import { Outlet } from 'react-router-dom'

function StudentViewcommonlayout() {
  return (
    <div>
        Common content
        <Outlet/>
    </div>
  )
}

export default StudentViewcommonlayout