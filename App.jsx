import React from 'react'
import Headers from './util/Headers'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
<div>
<Headers/>
<Outlet/>
</div>
  )
}

export default App
