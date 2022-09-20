import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('shoes');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [shoes, setShoes]= useState([getDatafromLS()]);

  //input field states
  const [brand, setBrand]= useState('');
  const [size, setSize]= useState('');
  const [color, setColor]= useState('');
  const [price, setPrice]= useState('');

  //form submit event
  const handleAddShoeSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let shoe={
      brand,
      size,
      color,
      price
    }
    setShoes([...shoes, shoe]);
    setBrand('');
    setSize('');
    setColor('');
    setPrice('');
  }

  //delete from LS
  const deleteShoe=(brand)=>{
    const filteredShoes=shoes.filter((element,index)=>{
      return element.brand !== brand
    })
    setShoes(filteredShoes);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('shoes', JSON.stringify(shoes));
  },[shoes])

  return(
    <div className="wrapper">
      <h1>Shoe List</h1>
      <p>Add and view your list.</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddShoeSubmit}>
            <label>Brand</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setBrand(e.target.value)} value={brand}></input>
            <label>Size</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setSize(e.target.value)} value={size}></input>
            <label>Color</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <label>Price</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <button type="submit" className="btn btn-primary btn-md">
              Add Shoe
            </button>
          </form>
        </div>

        <div className="view-container">
          {shoes.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View shoes={shoes} deleteShoe={deleteShoe}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger btn-md" 
          onClick={()=>setShoes([])}>Remove All</button>
          </>}
          {shoes.length <1 && <div>No shoes added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;