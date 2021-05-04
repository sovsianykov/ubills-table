import React, {useCallback, useRef} from "react";
import TableComponent from "../../components/TableComponent";
import { Button } from "@material-ui/core";
import { styles } from '../../components/style';
import {useDispatch, useSelector} from "react-redux";
import { getWatter } from "../../redux/actions";
import { GetNextMonth } from '../../components/getNextMonth'





const Watter = () => {
    const dispatch = useDispatch();
    const inputValue = useRef(null);
    const inputTariff = useRef(null);
    let prevMonth =useSelector(state => state.watter[state.watter.length-1])
    console.log(prevMonth)
    const clickHandler = useCallback(()=> {
         const newMonth = GetNextMonth(inputValue,inputTariff, prevMonth)
         dispatch(getWatter(newMonth))
    }, [dispatch,prevMonth ]);
    const  rows    = useSelector(state=> state.watter)

    return (
        <>
            <div style={styles.root}>
                <h2>Watter</h2>
                <TableComponent rows={rows} />
            </div>
            <div style={styles.input__Block}>
                <input type="text" ref={inputValue} style={styles.input} defaultValue=  '0'/> kWt
                <input type="text" ref={inputTariff} style={styles.input} defaultValue=  '2.68'/>uah.m/cub
                <Button variant="contained" onClick={clickHandler} style={styles.btn_1}>
                    Submit
                </Button>
            </div>

        </>
    );
};

export default Watter;
