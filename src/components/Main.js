import React from 'react';
import MainTable from "./MainTable";
import { styles } from './style'
import TableComponent from "./TableComponent";
import Electricity from "../pages/Elektro/Electricity";


const Main = () => {
    return (
        <div style={styles.container}>
            {/*<MainTable/>*/}
           <Electricity/>
        </div>
    )
}


export default Main;