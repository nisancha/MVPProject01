import React, { Component } from 'react';
import axios from 'axios';
import StoreListTable from './StoreListTable';

export class Stores extends Component {
 constructor(props) {
     super(props);
     this.state = { 
         Stores: []
     };
 } 
 
 componentDidMount(){
    this.fetchStores();
}

fetchStores = () => {
  axios
  .get('/Stores/GetStore')
  .then((res) => {
  console.log(res.data);
  this.setState({
    Stores: res.data,
});
})
.catch((e) => {
console.log(e);
});
}

 render() {
     const { Stores } = this.state;
     return <div>
         <StoreListTable Stores={Stores}/>
         <button> Create</button>
         <button> Delete</button>
        <button> Update</button>
     </div>
 }
}