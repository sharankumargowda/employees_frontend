import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import List from './List';
import Product from './product';

function Empolyee() {
    const navigate = useNavigate()
    const [turnOverData, setTurnOverData] = useState([])
    // var mtotalsalary = 0;
    // var ytotalsalary = 0;
    // var name  =0;
    useEffect(() => {
        axios
            .get("http://localhost:3001/turnOverData")
            .then(
                (response) => {
                    // console.log(response.data)
                    setTurnOverData(response.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }, [turnOverData]);


    return (<div className='back'><div>


        <center className='bb'><h1>🤷‍♀️ INDIAN PVT LMT COMPANY 🤷‍♀️ </h1>
            <h2> EMPOLYEE </h2>
        </center>
        <div>
        <button onClick={() => navigate('/product')}>product</button>
        <button onClick={() => navigate('/contact')}>contact</button>
        </div>
        <div className='EList'>
            <div className='EData'>
                <div>id</div>
                <div>number</div>
                <div>name</div>
                <div>buyingprice</div>
                <div>bought</div>
                <div>amountout</div>
                <div>sellingpirce</div>
                <div>sold</div>
                <div>stock</div>
                <div>unitprofit</div>
                <div>profit</div>
            </div>
            {turnOverData.map(

                (turnOver) => {
                    { /* mtotalsalary = mtotalsalary + employee.e_monthly_salary
        ytotalsalary = ytotalsalary + employee.e_monthly_salary * 12
        name ++; */
                    }
                    return (
                        <List key={turnOver.id}
                            id={turnOver.id}
                            pnumber={turnOver.pnumber}
                            pname={turnOver.pname}
                            buyingprice={turnOver.buyingprice}
                            bought={turnOver.bought}
                            amountout={turnOver.amountout}
                            sellingpirce={turnOver.sellingpirce}
                            sold={turnOver.sold}
                            stock={turnOver.stock}
                            unitprofit={turnOver.unitprofit}
                            profit={turnOver.profit} />
                    );
                }
            )}
            {/* <div className='TS'>
  <div> total monthly salary {mtotalsalary}    </div>

  <div> total year salary {ytotalsalary}    </div>
  <div> number of Empolyees {name}    </div>
  </div> */}
        </div>
        <center> <button className='EA' onClick={() => navigate('/AddData')}>add data</button></center>
    </div>
  
        </div>

    )
};

export default Empolyee