import React, {useCallback,  useRef, useState} from "react";
import { gDate } from "../../components/getDate";
import TableComponent from "../../components/TableComponent";
import { Button } from "@material-ui/core";
import { styles } from '../../components/style';





const Electricity = () => {
  const initialElMonths = [
    {
      id: 0,
      name: 0,
      prev: 0,
      current: 0,
      tariff: 0,
      sum: 0,
      date: gDate(),
    },
  ];
  const inputValue = useRef(null);
  const inputTariff = useRef(null);
  const [elMonths, setElMonths] = useState( initialElMonths);
  const clickHandler = useCallback(()=> {
    let prevMonth = elMonths[elMonths.length - 1];
    let newElMonth = [{
      id: elMonths.length + 1,
      name: elMonths.length + 1,
      prev: prevMonth.current,
      tariff: `${Number(inputTariff.current.value)}`,
      current: Number(inputValue.current.value),
      sum: Math.floor( (Number(inputValue.current.value) - prevMonth.current) * prevMonth.tariff),
      date: gDate(),
    }];

    setElMonths(elMonths => elMonths.concat(newElMonth))
  }, [elMonths]);
  console.log(elMonths)
  return (
      <>
    <div style={styles.root}>
      <h2>Electricity</h2>
      <TableComponent rows={elMonths} />
    </div>
     <div style={styles.input__Block}>
       <input type="text" ref={inputValue} style={styles.input} defaultValue=  '0'/> kWt
       <input type="text" ref={inputTariff} style={styles.input} defaultValue=  '1.68'/>uah.kWt/hr
       <Button variant="outlined" onClick={clickHandler} style={styles.btn_1}>
         Submit
       </Button>
     </div>

   </>
  );
};

export default Electricity;
