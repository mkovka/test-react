import React from "react";

const createArrays = (num1, num2) => {
    const arr1 = [];
    const arr2 = [];
    for (let i = 1; i <= num1; i++) 
    arr1.push(i);
    for (let i = 1; i <= num2; i++) 
    arr2.push(i);
    return {
      arr1,arr2
    }
}

const Table = (props) => {
  const res = createArrays(props.rows, props.columns);
  return (<div className="table"> 
        <table>
          {res.arr1.map((item, i) => (
            <tr key={i}>
              {
                res.arr2.map((item, i) => (
                  <td key={i}><img src={`https://randomuser.me/api/portraits/women/${i}.jpg`}/></td>
                ))
              }
            </tr>
          ))}
        </table>
  </div> );
};

export default Table;