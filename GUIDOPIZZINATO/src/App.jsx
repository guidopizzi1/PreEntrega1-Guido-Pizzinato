
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  
  const handleClick = (name) => {

    alert ("Click me on!" + " " + name)
  }

  return (
    <div>
    <Navbar/>
      <Header/>
      <Button text = "Home " number = {0} handleClick = {handleClick} />
      <Button text = "About " handleClick = {handleClick} />
      <Button text = "Contact " handleClick = {handleClick}/>
    </div>
  )
}

export default App
