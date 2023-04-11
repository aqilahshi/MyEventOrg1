import React, {useMemo} from 'react';
import dummy from "../dummy/Dummy1.json"
// import './style/Award.css'
import { useTable } from 'react-table';
import Table from 'react-bootstrap/Table';

function WinnerDetails(){
  //useMemo return a memoized value no need to render everytime
  const data = useMemo(() => dummy, []);
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Matric Number",
      accessor: "matricno",
    },
    {
      Header: "Username",
      accessor: "first_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },  
    {
      Header: "Phone Number",
      accessor: "phonenum"
    }
  ],[]
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} 
  = useTable({columns, data});

  return(
    <Table {...getTableProps } style={{justifyContent:'center'}}>
        {/* get data for header only */}
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) =>(
                <th {...column.getHeaderProps()}>
                  {/* telling it to render which header got in const columns */}
                  {column.render("Header")}
                </th>
              ))}  
            </tr>
          ))}
        </thead>
        {/* get props(pass to render data) */}
        <tbody {...getTableBodyProps}> 
          {rows.map((row) => {
            prepareRow(row);
              return(
                //Each row have their own cell
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
          })}
        </tbody>
      </Table>
  )
}

export default WinnerDetails;