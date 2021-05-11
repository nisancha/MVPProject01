import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const CustomerListTable = (props) => {
    const { Customers } = props;
    return (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>CustomerID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {Customers.map((c) => {
        return (
            <Table.Row>
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell>{c.name}</Table.Cell>
                <Table.Cell>{c.address}</Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
    );
};

export default CustomerListTable;
