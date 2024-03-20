import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const Update = () => {


    const { id } = useParams() 
    const navigate = useNavigate()
   
    const [pnumber, setPNumber] = useState("")
    const [pname, setPName] = useState("")
    const [buyingprice, setBuyingprice] = useState("")
    const [bought, setBought] = useState("")
    const [amountout, setAmountout] = useState("")
    const [sellingpirce, setSellingpirce] = useState("")
    const [sold, setSold] = useState("")
    const [stock, setStock] = useState("")
    const [unitprofit, setUnitProfit] = useState("")
    const [profit, setProfit] = useState("")


    useEffect(() => {
        axios
            .post("http://localhost:3001/getUpdateData", { id })
            .then((res) => {
                setPNumber(res.data.pnumber)
                setPName(res.data.pname)
                setBuyingprice(res.data.buyingprice)
                setBought(res.data.bought)
                setAmountout(res.data.amountout)
                setSellingpirce(res.data.sellingpirce)
                setSold(res.data.sold)
                setStock(res.data.stock)
                setUnitProfit(res.data.unitprofit)
                setProfit(res.data.profit)



            })
            .catch(
                err => { console.log(err) }
            )


    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Update", { id, pnumber,pname,buyingprice,bought,amountout,sellingpirce,sold,stock,unitprofit,profit })
                .then((response) => {

                    console.log(response)
                    navigate("/")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    }
    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                <input type='number' placeholder='Entre your number' name='pnumber' value={pnumber} onChange={(e) => { setPNumber(e.target.value) }} required />
          <input type='text' placeholder='pname' name='pname ' value={pname} onChange={(e) => { setPName(e.target.value) }} required />
          <input type='number' placeholder='buyingprice' name='buyingprice' value={buyingprice} onChange={(e) => { setBuyingprice(e.target.value) }} required />
          <input type='number' placeholder='bought ' name='bought' value={bought} onChange={(e) => { setBought(e.target.value) }} required />
          {/* <input type='number' placeholder='amountout' name='amountout' value={amountout} onChange={(e) => { setAmountout(e.target.value) }} required /> */}
          <input type='number' placeholder='sellingpirce' name='sellingpirce' value={sellingpirce} onChange={(e) => { setSellingpirce(e.target.value) }} required />
          <input type='number' placeholder='sold' name='sold' value={sold} onChange={(e) => { setSold(e.target.value) }} required />
          {/* <input type='number' placeholder='stock' name='stock' value={stock} onChange={(e) => { setStock(e.target.value) }} required /> */}
          {/* <input type='number' placeholder='unitprofit' name='unitprofit' value={unitprofit} onChange={(e) =>{ setUnitProfit(e.target.value)} } required />
          <input type='number' placeholder='profit' name='profit' value={profit} onChange={(e) => { setProfit(e.target.value) }} required /> */}
        <input type='submit' value="submit" />
                </form>
            </center>
        </div>


    )
}

export default Update;