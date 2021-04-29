import React from 'react';
import Row from "./Row";

function TableComponent(props) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>
                       month
                    </th>
                    <th>
                        prev
                    </th>
                    <th>
                        current
                    </th>
                    <th>
                        tariff
                    </th>
                    <th>
                        sum
                    </th>
                    <th>
                        date
                    </th>
                </tr>
                </thead>
                <tbody>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                </tbody>
            </table>
        </>
    );
}

export default TableComponent;