import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Context/global';
const Form = () => { 
    const {addIncome} =useGlobalContext()
    const [inputState,setInputState]=useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        // setError('')
    }

    const handleSubmit=(e)=>{
        e.preventDefault() //prevent default refresh
        addIncome(inputState)
    }
    const {title,amount,date,category,description}=inputState;

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>

            <div className="input-control">
                <input 
                    type="text" 
                    value={amount}
                    name={'amount'} 
                    placeholder="Amount"
                    onChange={handleInput('amount')}
                />
            </div>

            <div className="input-control">
                <DatePicker id='date' 
                placeholderText='Select a Date'
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(d)=>{
                    setInputState({...inputState,date:d});
                }}
                />

                </div>
                <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="rent">Rent</option>
                    <option value="dividends">Dividends</option>
                    <option value="royalties">Royalties</option>  
                    <option value="pension ">Pension</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-button">
                <button>Add</button>
            </div>

    </FormStyled>
  )
}

const FormStyled = styled.form`
`
export default Form