import React from 'react';
import './App.css';
import groceriesData from "./components/groceriesData"
import Groceries from "./components/Groceries"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      Groceries: groceriesData
    }
  }
render(){
  const grocerieComponents = 
  this.state.Groceries.map(item => 
  <Groceries 
  key={item.id} 
  product={item}
  
  />)
return(
  <div>
    <h1>
      yo
      {grocerieComponents}
    </h1>

  </div>
)


}


}

export default App;
