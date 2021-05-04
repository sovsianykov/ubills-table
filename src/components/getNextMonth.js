
import { gDate } from "./getDate";

export const GetNextMonth = (inputValue,inputTariff, prevMonth) =>{
    return [{
         id: prevMonth.id + 1,
         name: prevMonth.name + 1,
         prev: prevMonth.current,
         tariff: `${Number(inputTariff.current.value)}`,
         current: Number(inputValue.current.value),
         sum: Math.floor((Number(inputValue.current.value) - prevMonth.current) * prevMonth.tariff),
         date: gDate(),

     }];
 }
