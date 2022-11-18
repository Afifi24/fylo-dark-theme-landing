import React from 'react'
import styled from 'styled-components'
export default function Header() {
  return (
    <HeaderStyle>
      <div className="nav">
        <h2 className='logo'><img src="../images/logo.svg" alt="logo" /></h2>
        <ul className='nav-menu'>
            <li className='nav-item'>Features</li>
            <li className='nav-item'>Team</li>
            <li className='nav-item'>Sign In</li>
        </ul>
      </div>
      <div className="header-image">
        <img src="../images/illustration-intro.png" alt="" />
      </div>
    </HeaderStyle>
  )
}
// styled-components

const HeaderStyle = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Raleway', sans-serif;
.nav{
     color: #fff;
    width: 87%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 20vh;
    padding-top: 2.7rem;
    padding-bottom: 2.7rem;
    .nav-menu{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav-item{
        margin-left:4rem;
        cursor: pointer;
    }
}
.header-image{
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
    }
}
/* media query */
@media(max-width:680px){
.nav{
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin: 1rem;
}

}

@media(max-width:622px){
    .nav{
        flex-direction: column;
        align-items: center;
        .nav-menu{
            width: 80%;
            justify-content: space-around;
        }
      .nav-item{
        margin: 0;

      }
    }
}
`
