import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const DataItem = (props) => {
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.enteredLastName,
      sortable: true,
      grow: 2,
    },
    {
      name: "Last Name",
      selector: (row) => row.enteredLastName,
      sortable: true,
      hide: "sm",
    },
    {
      name: "email",
      selector: (row) => row.enteredEmail,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.enteredPhone,
      sortable: true,
      hide: "md",
    },
    {
      name: "Message",
      selector: (row) => row.enteredMessage,
      sortable: true,
      hide: "md",
    },
    {
      name: "Buttons",
      button: true,
      cell: (row) => (
        <>
          {/* <button
              onClick={() => props.click(row.id)}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button> */}
          <button onClick={() => props.click(row.id)}>Delete</button>
        </>
      ),
    },
  ];

  console.log("data:", props.data);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default DataItem;
// https://www.youtube.com/watch?v=DPdw4n4N_q0
