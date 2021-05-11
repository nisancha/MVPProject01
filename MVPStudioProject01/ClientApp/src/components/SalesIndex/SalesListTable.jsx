import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const SalesListTable = (props) => {
    const { Sales } = props;
    return (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>SalesID</Table.HeaderCell>
        <Table.HeaderCell>Customer ID</Table.HeaderCell>
        <Table.HeaderCell>Product ID</Table.HeaderCell>
        <Table.HeaderCell>Stores ID</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {Sales.map((a) => {
        return (
            <Table.Row>
                <Table.Cell>{a.id}</Table.Cell>
                <Table.Cell>{a.prodid}</Table.Cell>
                <Table.Cell>{a.custid}</Table.Cell>
                <Table.Cell>{a.storid}</Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
    );
};

export default SalesListTable;
