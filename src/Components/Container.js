import React from 'react'
import styled from 'styled-components'
import Form from './Form'
export default function Container() {
  return (
    <ContainerStyle>
      <div className="bg">
      <div className="head">
        <h1>All your files in one secure loction, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
      </div>
      </div>
      <div className="bg-dark-blue">
      <div className="security">
        <div className="access large">
          <img src="../images/icon-access-anywhere.svg" alt="" />
       <h3>Access your files, anywhere</h3>
       <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. </p>
        </div>
        <div className="security-security large">
          <img src="../images/icon-security.svg" alt="security" />
         <h3>Security you can trust</h3>
         <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. </p>
        </div>
        <div className="real-time large">
        <img src="../images/icon-collaboration.svg" alt="" />
         <h3>Real-time collaboration</h3>
         <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </p>
        </div>
        <div className="store large">
          <img src="../images/icon-any-file.svg" alt="" />
         <h3>Store any type of file</h3>
         <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>

      </div>
      <div className="productive">
        <div className="productive-image">
          <img src="../images/illustration-stay-productive.png" alt="" />
        </div>
        <div className="productive-text">
          <h2>Stay productive, wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. 
            <br /> <br />
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
          <h4>See how Fylo works <img src="../images/icon-arrow.svg" alt="" /> </h4>
        </div>
      </div>
      <div className="boxes">
        <div className="box-container">
          <div className="box box1">
            <div className='quots'><img src="../images/bg-quotes.png" alt="" /></div>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p>
            <div className="author">
              <img src="../images/profile-1.jpg" alt="" />
              <div className="author-info">
                <h5>Satish Patel</h5>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p>
            <div className="author">
              <img src="../images/profile-2.jpg" alt="" />
              <div className="author-info">
                <h5>Bruce McKenzie</h5>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
        </div>
          <div className="box">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p>
            <div className="author">
              <img src="../images/profile-3.jpg" alt="" />
              <div className="author-info">
                <h5>Iva Boyd</h5>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
      </div>
      </div>
      
    </ContainerStyle>
  )
}

// styled-components

const  ContainerStyle = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
color: #fff;
font-family: 'Raleway', sans-serif;
.bg-dark-blue{
  background-color: hsl(218, 28%, 13%);
  width: 100%;
}
.bg{
  display: flex;
  align-items: center;
  justify-content: center;
 background-image: url('../images/bg-curvy-desktop.svg');
background-repeat: no-repeat;
background-position:bottom;
width: 100%;
.head{

  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 700px;
  text-align: center;
  padding-top: 3rem;
  width: auto;
  min-width: 300px;
 
  
  h1{
    font-size: clamp(2.3rem, 2.5vw, 8rem);
    line-height: 50px;
  }
  p{
    margin: 3rem 1rem;
    line-height: 30px;
    font-size: 1.2rem;
    z-index: 10;
   font-family: 'Open Sans', sans-serif;
   font-weight: 300;
   color: hsl(0, 0%, 100%);

  }
  button{
    width: 18rem;
    height: 3.7rem;
    border: none;
    border-radius: 4rem;
    cursor: pointer;
    background:linear-gradient(to right,hsl(176, 68%, 64%),hsl(198, 60%, 50%));
    font-size: 1rem;
    z-index: 10;
    color: #fff;
    &:hover{
      filter: brightness(1.5);
    }
  }
   @media(max-width:656px){
    h1{
      font-size: 1.7rem;
      padding: 0rem 1rem;
    }
    p{
      font-size: 14px;
    }
   }
}
}

.security{
  min-height: 100vh;
  display: grid;
  padding: 0rem 2rem;
  width: 87%;
  margin: auto;
  grid-template-areas: 
  'access security'
  'real store'
  ;
  
gap: 10rem;
  .large{
    max-width: 396px;
    text-align: center;
    h3{
      margin-bottom: 0.5rem;
    }
    p{
    font-size: 14px;
    line-height:20px;
  }
  img{
    margin-bottom:0.5rem;
  }
  }
  .access{
    grid-area: access;
  }
  .security-security{
    grid-area: security;
  }
  .store{
    grid-area: store;
  }
  .real-time{
    grid-area: real;
  }
  /* media query security */
  @media(max-width:700px){
    grid-template-areas: 
  'access '
  'security '
  'real '
  'store '
  ;
  }
}
/* productive */
.productive{
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 87%;
  margin: auto;
  gap: 4rem;
  .productive-image{
    flex: 1;
   img{
    width: 100%;
    height: 100%;
   }
  }
  .productive-text{
    flex: 1;
    max-width: 500px;
    p{
      margin: 2rem 0rem;
      
    }
    h2{
      font-size: 2.4rem;
    }
    h4{
      cursor: pointer;
      color:hsl(176, 68%, 64%);
      font-weight: normal;
      &:hover{
        color: #fff;
      }
    }
  }
  /* media-query-productive */
  @media(max-width:832px){
    flex-direction: column;
    .productive-text{
      max-width: 750px;
      h2{
        font-size: clamp(1rem ,3vw,3rem);
      }
    }
    .productive-image{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        height: 60%;
      }
    }
  }
}
/* boxes */
.boxes{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 87%;
  margin:auto;
  gap: 2rem;
  padding-bottom: 16rem;
  .box1{
    position: relative;
    .quots{
      position: absolute;
      left: -3%;
      top:-17% ;
      /* z-index: 0; */
    }
  }
 
  .box{
    max-width: 320px;
    background-color: #202A3C;
    min-height: 200px;

   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
   padding: 0px 20px;
   p{
    font-size: 14px;
    margin-bottom: 1rem;
    color: hsl(0, 3.8461538461538316%, 89.80392156862746%);
    line-height: 20px;
   }
   .author{
     display: flex;
     margin-bottom: -2rem;
     align-items: center;
    img{
      height: 25px;
      width: 25px;
      border-radius: 50%;
    }
    .author-info{
      margin-left: 0.7rem;
      h5{
        font-size: 12px;
        margin-bottom:0.2rem;
      }
      h6{
        font-size: 8px;
        font-weight: normal;
      }
    }
   }
  }
  .box-container{
    display: flex;
    align-items: center;
  gap: 2.5rem;
  }
  /* media-query */
  @media(max-width:860px){
    flex-direction: column;
    .box-container{
      flex-direction: column;
    }
  }
}
`
