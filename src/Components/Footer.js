import React from 'react'
import styled from 'styled-components'
import Form from './Form'
export default function Footer() {
  return (
    <Footerstyle>
        <div className="bg-footer">
            <Form/>
      <img src="../images/logo.svg" alt="" />
      <div className="content">
        <div className="content-text">
            <img src="../images/icon-location.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="content-contact">
            <div className="contact">
                <img src="../images/icon-phone.svg" alt="" />
                <p>+1-543-123-4567</p>
            </div>
            <div className="contact down">
                <img src="../images/icon-email.svg" alt="" />
                <p>example@fylo.com</p>
            </div>
        </div>
        <div className="content-nav">
            <div className="nav">
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </div>
            <div className="nav">
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </div>
        </div>
        <div className="content-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      </div>
    </Footerstyle>
  )
}
// styled-components

const Footerstyle = styled.div`
min-height: 100vh;
background-color:  hsl(216, 53%, 9%);
display: flex;
align-items: flex-end;
position: relative;
padding-top: 4rem;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
.bg-footer{
 width: 87%;
margin: auto; 
display: flex;
flex-direction: column;
align-items: flex-start;
}
.content{
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding-top:3rem ;
    .content-text{
        flex: 2;
        display: flex;
        align-items: flex-start;
        p{
            margin-left:1.5rem;
        }
    }
    .content-nav{
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        .nav{
            list-style: none;
           min-height: 150px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           li{
            cursor: pointer;
           }

        }
    }
    .content-contact{
        flex: 1;
        display: flex;
        flex-direction: column;
        /* gap: 2rem; */
        align-items: flex-start;
        .down{
            margin-top:1rem;
        }
        .contact{
            display: flex;
            align-items: flex-start;
            p{
                margin-left:1rem;

            }
        }
    }
    .content-icons{
        flex: 1;
         display: flex;
         align-items: flex-start;
         justify-content: space-around;
         
         a{
           color: #fff;
          border: 1px solid #fff;
          border-radius:50%;
          width: 31px;
          height: 31px;
          text-decoration: none;
          &:hover{
            border-color: hsl(176, 68%, 64%);
            
          }
        .fa-brands{
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top:0.5rem;
            &:hover{
                color: hsl(176, 68%, 64%);
            }
        }
         }
      
    }

}
/* media query */

@media(max-width:956px){
    .content{
        flex-direction: column;
        padding-bottom: 3rem;
        .content-text{
            max-width: 300px;
            p{
                line-height: 30px;
            }
        }
      .content-nav{
        flex-direction: column;
        .nav{
            margin-bottom: 3rem;
        }
      }
      .content-icons{
    align-items: center;
    justify-content: center;
    width:90vw;
    a{
        margin: 1rem;
    }
      }
    }
}
`