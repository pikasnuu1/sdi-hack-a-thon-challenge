import React from 'react';
import styles from './Start.module.css'
import styled from 'styled-components';

const ListItem = styled.li`
font-size: 100px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

&:after{
  content: '${(props)=>props.text}';
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

const Start = () => {
  const sentence = [
    'This web app was done using three.js',
    'This text using CSS though.'
  ];

  return (
    <div className={styles.Start}>
      <div className={styles.Sentences}>
        <ul className={styles.TheList}>

          {sentence.map((item) => ( <ListItem className={styles.ListItem} key={item} text={item}>{item}</ListItem>))}
          
        </ul>
      </div>
    </div>
  )
}

export default Start;