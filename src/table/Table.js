import React from 'react'
import { useTable } from 'react-table/dist/react-table.development';

export default function Table({columns,data}) {
    let tableInstance  = useTable({ 
        columns,//short in p:v property name and value name ydi same ho to keval property ka name de skte he
        data
    });     // i am pasing actural argument
        
     //destructuring
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups, 
        rows,
        prepareRow,
    } = tableInstance;
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps()}
              style={{
                borderBottom: 'solid 3px red',
                background: 'aliceblue',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}
