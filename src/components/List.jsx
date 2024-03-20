import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const List = (props) => {
    const navigate = useNavigate()
    const { id, pnumber,pname,buyingprice,bought,amountout,sellingpirce,sold,stock,unitprofit,profit } = props;


    // const e_yearly_salary = e_monthly_salary * 12;
    // const total = e_yearly_salary + e_monthly_salary





    const handleDelete = () => {

        try {
            axios.post("http://localhost:3001/delete", { id })
                .then((res) => { console.log(res) })
                .catch((err) => { console.log(err) });

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='EData'>
            <div>{id}</div>
            <div>{pnumber}</div>
            <div> {pname} </div>
            <div> {buyingprice} </div>
           <div>{ bought}</div>
            <div>{amountout}</div>
            <div>{sellingpirce}</div>
            <div>{sold}</div>
            <div>{stock}</div>
            <div>{unitprofit}</div>
            <div>{profit}</div>


            <button className='ED' onClick={handleDelete}>Delete</button>
            <button className='EU' onClick={() => { navigate(`/Update/${id}`) }}>Update</button>
        </div>
    );
}

export default List