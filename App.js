import styled from "styled-components";
import lfc from './Images/lfc.jpg'
import { MainLayout } from "./Styles/layouts";
import Orb from "./Componets/Orb/Orb";
import { Navigate } from "./Componets/Navigation/navigate";
import { useMemo, useState } from "react";
import Dashboard from "./Componets/dashboard";
import Expense from "./Componets/expenses";
import Incomes from "./Componets/incomes";
import { useGlobalContext } from "./Context/global";
function App() {
  const [active,setActive]=useState(1);
  const global=useGlobalContext();
  console.log(global)
  const displayData=()=>{
    switch(active){
      case 1: return <Dashboard/>
      case 2: return <Dashboard/>
      case 3: return <Incomes/>
      case 4: return <Expense/>
      
      default: return <Dashboard/>
    }
  }
  const orbcolr=useMemo(()=>{
    return <Orb/>
  },[])
  return (
    <AppStyled lfc={lfc} className="App">
    <Orb/>
    <MainLayout>

    <Navigate active={active}  setActive={setActive} />
    <main>
   {displayData()}
    </main>
    </MainLayout>
   
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
 background-color: #FAF8DB; 
 position: relative;
 main{
    flex: 1;
    background: #FFFFFF;
    margin-top: 15px;
    border: 3px solid grey;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
}
`

export default App;
