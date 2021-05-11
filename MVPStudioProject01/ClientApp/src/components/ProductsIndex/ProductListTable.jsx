import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const ProductListTable = (props) => {
    const { Products } = props;
    return (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ProductID</Table.HeaderCell>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {Products.map((p) => {
        return (
            <Table.Row>
                <Table.Cell>{p.id}</Table.Cell>
                <Table.Cell>{p.prname}</Table.Cell>
                <Table.Cell>{p.price}</Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
    );
};

export default ProductListTable;
