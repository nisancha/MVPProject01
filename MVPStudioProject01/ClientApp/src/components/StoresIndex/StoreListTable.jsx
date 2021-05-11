import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const StoreListTable = (props) => {
    const { Stores } = props;
    return (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>StoreID</Table.HeaderCell>
        <Table.HeaderCell>Stores Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {Stores.map((s) => {
        return (
            <Table.Row>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.stname}</Table.Cell>
                <Table.Cell>{s.address}</Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
    );
};

export default StoreListTable;
