import React from 'react'
import styled from 'styled-components'
export default function Form() {
  return (
    <Formstyle>
      <h1>Get early access today</h1>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you. </p>
      <div className="form">
        <input type="text" name="" id="" placeholder='email@example.com' />
        <button>Get Started For Free</button>
      </div>
    </Formstyle>
  )
}
// styled-components

const Formstyle = styled.div`
      background-color: #1A2231;
      max-width: 870px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 270px;
      position: absolute;
      top: -20%;
      left: 15%;
      box-shadow: 10px 5px 10px rgba(0,0,0,0.3);
     border-radius: 10px;
     h1{
      font-family: 'Raleway', sans-serif;
     }
   p{
    margin: 2rem 0rem;
    font-size: 14px;
    padding: 0rem 4rem;
   }
   .form{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 2rem;
   }
   input{
    width: 62%;
    height: 47px;
    border-radius: 30px;
    border: none;
    padding: 0rem 1rem;
    outline: none;
    font-size: 12px;
    ::placeholder{
        padding-left:0rem;
    }
    
   }
   

   button{
    width: 20%;
    height: 47px;
    border-radius: 30px;
    border: none;
    background: linear-gradient(to right,hsl(176, 68%, 64%),hsl(198, 60%, 50%));
    color: #fff;
    cursor: pointer;
  padding: 0rem 1rem;
   }
   /* media query */
   @media(max-width:1164px){
    top: -20%;
    left: 13%;
   }
   @media(max-width:1114px){
    top: -18%;
    left: 11%;
   }
   @media(max-width:1050px){
    top: -17%;
    left: 8%;
   }
   @media(max-width:984px){
    top: -17%;
    left: 5%;
   }
   @media(max-width:962px){
    top: 2%;
    left: 2%;
    position: initial;
    margin-bottom: 5rem;
   }
   @media(max-width:896px){
   
    min-height: 300px;
   padding: 2rem 0rem;
   .form{
    flex-direction: column;
    button{
        width: 80%;
    }
    input{
        width: 80%;
    }
   }
   p{
    padding: 0rem;
   }
   }
   @media(max-width:602px){
    h1{
        font-size: 1.2rem;
    }}
   @media(max-width:502px){
    h1{
        font-size: 1.2rem;
    }
    padding: 2rem 1rem;

    .form{
    button{
        width: 90%;
    }
    input{
        width: 83%;
    }
}
   }
`