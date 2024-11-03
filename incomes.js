import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/layouts'
import { useGlobalContext } from '../Context/global'
import Form from './Form/form'

const Incomes = () => {
  const {addIncome}=useGlobalContext();
  return (
    <IncomesStyled>
    <InnerLayout>
        <h2>Incomes</h2>\
        <div className="income-content">
          <div className="form-conatiner">
            <Form/>
            <div className="incomes">

            </div>
          </div>
        </div>
    </InnerLayout>

    </IncomesStyled>
  )
}

const IncomesStyled=styled.div`
`

export default Incomes