import React, { useState } from "react";
import Navbaradmin from "../../components/partial/Navbaradmin";
import Transactiondata from "../../assets/Datadummy/Transactiondata"


function Transaction() {

    const [datas] = useState(Transactiondata);

    console.log(datas);

  return (
    <div>

      <Navbaradmin/>

      <div className="container my-5 text-red">
        <h3>Income Transaction</h3>
      </div>

      <div className="container px-5">
        <table className="table table-bordered border-dark">
            <thead>
            <tr>
                <th scope="col" className="bg-secondary bg-opacity-10">No</th>
                <th scope="col" className="bg-secondary bg-opacity-10">Name</th>
                <th scope="col" className="bg-secondary bg-opacity-10">Address</th>
                <th scope="col" className="bg-secondary bg-opacity-10">Post Code</th>
                <th scope="col" className="bg-secondary bg-opacity-10">Income</th>
                <th scope="col" className="bg-secondary bg-opacity-10">Status</th>
            </tr>
            </thead>
            <tbody>
            {datas.map(data => (
            <tr>
                <th scope="row">{data.no}</th>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.postcode}</td>
                <td className="text-primary">{data.income}</td>
                <td className= {`status-transaction-${data.status}`} >{data.status}</td>
            </tr>
            ))}
            </tbody>
        </table>
      </div>

    </div>
  );
}

export default Transaction;
