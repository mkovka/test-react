import React from "react";
import Table from "./table";
import "./createtable.scss";

const patt = /^([1-9])$/g;

export default class CreateTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 0,
      columns: 0,
      columnsInput: "",
      rowsInput: "",
      error: false
    };
  }

  handleSubmit = () => {
    const { columnsInput, rowsInput } = this.state;
    this.setState(
      { rows: Number(rowsInput), columns: Number(columnsInput) },
      () => {
        this.setState({ columnsInput: "", rowsInput: "" });
      }
    );
  };

  handleRowsChange = value => {
    if (value.match(patt)) {
      this.setState({ rowsInput: value, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  handleColumnsChange = value => {
    if (value.match(patt)) {
      this.setState({ columnsInput: value, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { rows, columns, error, rowsInput, columnsInput } = this.state;
    return (
      <div className="create-container">
        <p>Rows</p>
        <input
          type="text"
          value={rowsInput}
          onChange={e => this.handleRowsChange(e.target.value)}
        />
        <p>Columns</p>
        <input
          type="text"
          value={columnsInput}
          onChange={e => this.handleColumnsChange(e.target.value)}
        />
        <button onClick={this.handleSubmit}>Create table</button>
        {error ? <p>Please input a number between 1-9</p> : null}
        <Table rows={rows} columns={columns} />
      </div>
    );
  }
}
