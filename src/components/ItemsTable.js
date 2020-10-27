import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';

const useStyles = makeStyles((theme) => ({
  table: {
    borderRadius: theme.borderRadius,
    height: '90vh',
  },
}));

/**
 * @param {object} props
 * @param {object[]} props.items the items to display
 * @param {function} props.onItemClick callback when an item is clicked
 * @param {string} props.searchText the text to use for initializing the table search. Might be undefined
 */
export default function ItemsTable({ items, onItemClick, searchText }) {
  const classes = useStyles();

  const columns = [
    {
      name: 'id',
      label: 'Id',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'type',
      label: 'Catégorie',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'service',
      label: 'Service',
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: 'battery',
      label: 'Batterie',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'latitude',
      label: 'Latitude',
      options: {
        filter: false,
        sort: true,
        display: false,
      },
    },
    {
      name: 'longitude',
      label: 'Longitude',
      options: {
        filter: false,
        sort: true,
        display: false,
      },
    },
  ];

  const handleRowClick = (rowData, { dataIndex, rowIndex }) => {
    onItemClick(dataIndex);
  };

  const options = {
    filterType: 'checkbox',
    elevation: 1,
    rowsPerPage: 20,
    rowsPerPageOptions: [5, 10, 20, 40],
    selectableRows: 'none',
    selectableRowsHeader: false,
    searchText: searchText,
    onRowClick: handleRowClick,
  };

  // TODO: customize text labels to use French

  return (
    <MUIDataTable
      className={classes.table}
      title={'Objets'}
      data={items}
      columns={columns}
      options={options}
    />
  );
}