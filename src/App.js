
import './App.css';
import ProductTitle from './ProductTitle'
import React from 'react'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      product : [],
      valu:'',
      count:1,
      nper:'',
      total:0
    }
  }
  // hadleCount = () =>{
  // this.temp=  setInterval(() => {
  //     this.setState({count:this.state.count+1})
  //   }, 1000);
  // }
  // reshand=() =>{
  //   clearInterval(this.temp)
  // }
  handleclick =(val) =>{
    this.setState({product:[...this.state.product,val]})

    
  }
  handleChange =(evt) =>{
    this.setState({valu:evt.target.value})
  } 
  handleCal=(evt) =>{
    this.setState({nper:[this.state.product.length]})
    var tot =this.state.product.map(item =>(Number(this.state.valu))*(Number(item.perc)/100)).reduce((a,b) => a+b,0)
    this.setState({total:tot})
  }
 

  render() {
    console.log(this.state)
    return(
      <div class="container mt-5 p-5 border border-5 bg-secondary" style={{maxWidth: "1000px",height:"auto",padding:"50px",backgroundColor:"#8de79f6e",boxShadow: "1px 1px 15px 3px"}}>
        
 <div class="card text-center"style={{backgroundColor:"thistle"}}>
  <div class="card-header" style={{background:"#172E4D" ,fontSize:"30px",color:"white"}}>
   <b>Tip Calculater</b> 
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcome To My Tip Calculater</h5>
    <label style={{ display: "block",marginTop:"30px"}}>Enter Bill amount</label>
    <input type="text" class="form-control" aria-label="Text input with dropdown button" value={this.state.valu} onChange={(evt) =>{this.handleChange(evt)}} style={{marginBottom:"30px"}}></input>
    <label style={{ display: "block"}}>Select Tip Percent and Enter the Name of person</label>
    <ProductTitle hand={this.handleclick}/>
    
<div style={{display:"block"},{border:"1px solid #D5DADA"}}>
  <header class="card-header">List</header>
  <ul>
    {this.state.product.map (item =><li>{item.name} offering the tip of {(Number(this.state.valu))*(Number(item.perc)/100)}</li>)}
  </ul>
  </div>
  <button onClick={this.handleCal} class="btn btn-primary"style={{margin:"20px"}}>calculate</button>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col-sm-8">Total customer</th>
      <th scope="col--sm-4">Total Tip</th>
      </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row-sm-8">{this.state.nper}</th>
    <td scope="row-sm-4">{this.state.total}</td>
     
    </tr>
   </tbody>
   <dashBord/>
</table>
    </div>
    <footer class="card-footer text-muted" style={{position:"bottom",left:"0",bottom:"0",width:"100%",textAlign:"center",color:"white",fontSize:"20px" ,backgroundColor:"#172E4D"}}>
    @2020 Tip Calculater
  </footer>
    
</div>


      </div>  
    )
  }
}


export default App;
