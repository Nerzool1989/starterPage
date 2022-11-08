import './style.css'
import reactlogo from './reactlogo.jpg'
import reactsvglogo from './react.svg'
import process from 'process'
import { ClickCounter } from './ClickCounter'

console.log(process.env)

export const App = () => {
  const sdf = 0


  
    return (
    <div>
      <h1>Hello, it's a and name from webpack files </h1>
      <img src={reactlogo} alt="react logo" width="300" height="300" />
      <img src={reactsvglogo} alt="react logo" width="300" />
      <ClickCounter />
    </div>
  )
}
