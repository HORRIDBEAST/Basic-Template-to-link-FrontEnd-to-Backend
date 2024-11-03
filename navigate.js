import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import avatar from "../../Images/avatar.png";

export const Navigate = ({ active, setActive }) => {
  return (
    <Navstyled>
      <div className='user-con'>
        <img src={avatar} alt='User' />
        <div>
          <h2>Pindk</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.icon} <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <li>
          {signout} Signout
        </li>
      </div>
    </Navstyled>
  );
}

const Navstyled = styled.div`
  padding: 2rem 1.5rem;
  width: 344px;
  height: 100%;
  background: rgba(152, 146, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  margin-left: 10px;
  margin-top: 15px;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      padding: 0.2rem;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    h2 {
      color: black;
      font-size: 40px;
    }
    
    p {
      color: black;
      font-size: 30px;
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      font-size: 20px;
      color: blue;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      padding-left: 1rem;
      position: relative;

      i {
        color: blue;
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }

    .active {
      color: green !important;

      i {
        color: green !important;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
      }
    }
  }

  .bottom-nav {
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export default Navigate;
