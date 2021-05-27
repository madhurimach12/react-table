import React from "react";
import "./table.css";

import { useTable, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

  
    return (
        <div class="full">
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                              
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                               ? ' ▼'
                                                : ' ▲'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <br />
            <div>Click on ╚  to sort</div>
        </div >
    )
}

function SortingTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: '╚  First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: '╚  Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: '╚  Real Name',
                        accessor: 'real',
                    },
                    {
                        Header: '╚  Age',
                        accessor: 'age',
                    },
                    
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "real":" Daniel Radcliffe",
            "age": 31,
            
        },
        {
            "firstName": "Ron",
            "lastName": "Weasley",
            "real": "Rupert Grint",
            "age": 32,
            
            
        },
        {
            "firstName": "Hermoine",
            "lastName": "Granger",
            "real": "Emma Watson",
            "age": 31,
           
            
        },
        {
            "firstName": "Albus ",
            "lastName": "Dumbledore",
            "real": "Michael Gambon",
            "age": 80,
           
           
        },
        {
            "firstName": "Draco",
            "lastName": "Malfoy",
            "real":"Tom Felton",
            "age": 33,
           
            
        },
        {
            "firstName": "Rubeus ",
            "lastName": "Hagrid",
            "real": "Robbie Coltrane",
            "age": 71,
           
            
        },
        {
            "firstName": "Lord",
            "lastName": "Voldemort",
            "real": "Ralph Fiennes",
            "age": 58,
         
            
        },
        {
            "firstName": "Severus",
            "lastName": "Snape",
            "real": "Alan Rickman",
            "age": "RIP",
           
            
        }]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default SortingTableComponent;