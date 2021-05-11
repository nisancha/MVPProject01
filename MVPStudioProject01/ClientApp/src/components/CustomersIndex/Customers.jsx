import React, { Component } from 'react';
import axios from 'axios';
import CustomerListTable from './CustomerListTable';

export class Customers extends Component {
 constructor(props) {
     super(props);
     this.state = { 
         Customers: []
     };
 } 
 
 componentDidMount(){
    this.fetchCustomers();
}

fetchCustomers = () => {
  axios
  .get('/Customers/GetCustomer')
  .then((res) => {
  console.log(res.data);
  this.setState({
    Customers: res.data,
});
})

.catch((e) => {
console.log(e);
});
}

CreateCustomers = () => {
    axios.Post('/Customers/PostCustomer',{
        id:"",
        name:"",
        address:""
    
        .then(res => {
            console.log(res)
            this.fetchCustomers();
        })
        .catch(e => {
            console.log(e)
        })
    })}


 render() {
     const { Customers } = this.state;
     return <div>
    <CustomerListTable Customers={Customers}/>
    <button> Create</button>
    <button> Delete</button>
    <button> Update</button>
     </div>
 }
}