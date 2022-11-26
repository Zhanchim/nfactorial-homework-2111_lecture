import React from 'react';
import ContentMain from './Components/Post';

const myArticles = [
  { id: 1, title: "7 Practical CSS Tips" },
  { id: 2, title: "7 Practical Javascript Tips" },
  { id: 3, title: "7 Practical React Tips" }
];
const myMainText = [
  { id: 1, Text: "You not only learn more Python by implementing what you "+
  "already know but, in the end, you can see how all your hard "+
  "work pays off." },
  { id: 2, Text: "2Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classNameified as beginner, intermediate, and advanced."+
  "You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..." },
  { id: 3, Text: "3Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classNameified as beginner, intermediate, and advanced."+
  "You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..." }
];
const myImages = [
  { id: 1, Img: require('./assets/thread1.png') },
  { id: 2, Img: require('./assets/thread2.png') },
  { id: 3, Img: require('./assets/thread3.png') }
]; 

function App() {
  return (  
      <div style={{display:"flex",
      flexDirection: "column",      
      padding: "0px",
      position: "relative",
      width: "1440px",
      height: "2388px",      
      background: "#F1F1F1"}}>
        <div style={{
        margin:"40px",  
        width: "1120px",
        height: "120px",          
        lineHeight: "120px",
        fontFamily:"Kanit", 
        fontStyle: "normal",
        fontSize:"48px"}}>
          Hello, world!
          </div>
      {myArticles.map((Titles, index)=><ContentMain key={index}  title={Titles.title} Text={myMainText[index].Text} Img={myImages[index].Img}/>)}      
      </div>
  );
}

export default App;
