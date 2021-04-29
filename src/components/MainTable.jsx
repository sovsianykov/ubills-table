import React from 'react';
import { styles } from './style'


function MainTable() {
    return (
        <>
           <table>
                   <thead>
                      <tr>
                       <th>
                           month
                       </th>
                       <th>
                           electricity
                       </th>
                       <th>
                           watter
                       </th>
                       <th>
                           housekeeping
                       </th>
                       <th>
                           gas
                       </th>
                       <th>
                           domophone
                       </th>
                       <th>
                           internet
                       </th>
                       <th>
                           total
                       </th>
                       <th>
                           date
                       </th>
                   </tr>
                   </thead>
           </table>
        </>
    );
}

export default MainTable;