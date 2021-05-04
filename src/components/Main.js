import React from 'react';
import MainTable from "./MainTable";
import { styles } from './style'
import TableComponent from "./TableComponent";
import Electricity from "../pages/Elektro/Electricity";
import Watter from "../pages/Watter/Watter";


const Main = () => {
    return (
        <div style={styles.container}>
            {/*<MainTable/>*/}
           <Electricity/>
            <Watter/>
        </div>
    )
}


export default Main;
