import React from 'react'
import styled from 'styled-components';

const ListItem = styled.li`
font-size: 100px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

&:after{
  content: '${(props) => props.text}';
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
}

&:hover{
  &:after{
    animation: moveText 0.5s linear both;

    @keyframes moveText{
      to{
        width: 100%;
      }
    }
  }
}
`;

function Html() {

  const sentence = [
    'This web app was done using three.js',
    'This text using CSS though.'
  ];

  return (
    // <h1
    //   style={{
    //     position: 'absolute',
    //     top: '50vh',
    //     left: '50vw',
    //     transform: 'translateX(-50%)',
    //     color: '#292828'
    //   }}>
    //   hello.
    // </h1>
    <ul>

      {sentence.map((item) => (<ListItem key={item} text={item}>{item}</ListItem>))}

    </ul>
  )

}

export default Html;