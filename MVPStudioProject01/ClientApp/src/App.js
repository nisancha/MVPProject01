import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Customers } from './components/CustomersIndex/Customers';
import { Products } from './components/ProductsIndex/Products';
import { Stores } from './components/StoresIndex/Stores';
import { Sales } from './components/SalesIndex/Sales';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/CustomersIndex' component={Customers} />
        <Route path='/ProductsIndex' component={Products} />
        <Route path='/StoresIndex' component={Stores} />
        <Route path='/SalesIndex' component={Sales} />
      </Layout>
    );
  }
}
