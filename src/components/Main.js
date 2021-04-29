import React from 'react';
import MainTable from "./MainTable";
import { styles } from './style'
import TableComponent from "./TableComponent";


const Main = () => {
    return (
        <div style={styles.root}>
            {/*<MainTable/>*/}
            <TableComponent/>
        </div>
    )
}


export default Main;