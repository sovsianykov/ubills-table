import React, {useCallback, useRef} from "react";
import TableComponent from "../../components/TableComponent";
import { Button } from "@material-ui/core";
import { styles } from '../../components/style';
import {useDispatch, useSelector} from "react-redux";
import {getElectricity} from "../../redux/actions";
import {GetNextMonth} from "../../components/getNextMonth";





const Electricity = () => {
  const dispatch = useDispatch();
  const inputValue = useRef(null);
  const inputTariff = useRef(null);
  let prevMonth =useSelector(state => state.electricity[state.electricity.length-1])
  console.log(prevMonth)
  const clickHandler = useCallback(()=> {
    const newMonth = GetNextMonth(inputValue,inputTariff, prevMonth)
    dispatch(getElectricity(newMonth))
  }, [dispatch,prevMonth ]);

  const  rows = useSelector(state=> state.electricity)
  // if (rows === 2) { rows.shift()}
  return (
      <>
    <div style={styles.root}>
      <h2>Electricity</h2>
      <TableComponent rows={rows} />
    </div>
     <div style={styles.input__Block}>
       <input type="text" ref={inputValue} style={styles.input} defaultValue=  '0'/> kWt
       <input type="text" ref={inputTariff} style={styles.input} defaultValue=  '1.68'/>uah.kWt/hr
       <Button variant="contained" onClick={clickHandler} style={styles.btn_1}>
         Submit
       </Button>
     </div>

   </>
  );
};

export default Electricity;
