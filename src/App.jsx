import {useState, useEffect} from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
const data = useCurrencyInfo("usd");
console.log(data)

  return (
    <div>App</div>
  )
}

export default App