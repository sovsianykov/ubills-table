import React from 'react';

const Row = ({ row }) => {
    return (
        <>
            <tr>
                <td>{row.name}</td>
                <td>{row.prev} </td>
                <td>{row.current}</td>
                <td>{row.tariff}</td>
                <td>{row.sum} UAH</td>
                <td>{row.date}</td>
            </tr>
        </>
    );
};

export default Row;