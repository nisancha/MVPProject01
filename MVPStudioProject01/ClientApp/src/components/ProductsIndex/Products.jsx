import React, { Component } from 'react';
import axios from 'axios';
import ProductListTable from './ProductListTable';

export class Products extends Component {
 constructor(props) {
     super(props);
     this.state = { 
         Products: []
     };
 } 
 
 componentDidMount(){
    this.fetchProducts();
}

fetchProducts = () => {
  axios
  .get('/Products/GetProduct')
  .then((res) => {
  console.log(res.data);
  this.setState({
    Products: res.data,
});
})
.catch((e) => {
console.log(e);
});
}

 render() {
     const { Products } = this.state;
     return <div>
<ProductListTable Products={Products}/>
<button> Create</button>
<button> Delete</button>
<button> Update</button>
     </div>
 }
}