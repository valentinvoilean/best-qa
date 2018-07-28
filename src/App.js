import React from 'react'
import './App.css'

import { GridPreview } from './components'

import { Home } from './screens/Home'

const App = () => (
  <div className={'App'}>
    <Home />
    <GridPreview />
  </div>
)

export default App
