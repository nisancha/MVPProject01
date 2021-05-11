import React, { Component } from 'react';
import axios from 'axios';
import SalesListTable from './SalesListTable';

export class Sales extends Component {
 constructor(props) {
     super(props);
     this.state = { 
         Sales: []
     };
 } 
 
 componentDidMount(){
    this.fetchSales();
}

fetchSales = () => {
  axios
  .get('/Sales/GetSales')
  .then((res) => {
  console.log(res.data);
  this.setState({
    Sales: res.data,
});
})
.catch((e) => {
console.log(e);
});
}

 render() {
     const { Sales } = this.state;
     return <div>
         <SalesListTable Sales={Sales}/>
         <button> Create</button>
         <button> Delete</button>
        <button> Update</button>
     </div>
 }
}