import { useState,useEffect } from 'react';
import './App.css';
import QuestionTile from './components/questionTile'
import LadyMobileImage from './images/womenOnlineMobile.svg'
import DesktopBoxImage from './images/DesktopBox.svg'
function FaqCard() {

  const [activeAnswers,setActiveAnswers]=useState(new Array(5).fill(false));
     const displayAnswer=(index)=>{
         const states=activeAnswers.slice();
         if(states[index])
          {
            states[index]=false;
            setActiveAnswers(states)
          }
          else{
            states.forEach((tile,index)=>{
              if(tile)
                  states[index]=false;
          });
          states[index]=true;
          setActiveAnswers(states);
       
          }
         }

  const [deskSize,setDeskSize]=useState(true);
  const chooseImgae=()=>{
    if(window.innerWidth>=375)
      setDeskSize(false);
    else
      setDeskSize(true);
  };
  useEffect(()=>{
    chooseImgae();
  },[])
  window.addEventListener('resize',chooseImgae);

  return (
    <div className="cardFrame">
      <div className="LadyImage">
      {deskSize && <img className="lady" src={LadyMobileImage} alt="Logo"/>}
      {!deskSize && <img className="box" src={DesktopBoxImage} alt="Logo"/>}
      </div>
      <div className="Card">
        <div className="content">
        <h1>FAQ</h1>
        <QuestionTile question={"How many team members can I invite?"} index={0} showClass={activeAnswers[0]} handleClick={(i)=>displayAnswer(i)}>
          You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
        </QuestionTile>
        <QuestionTile question={"What is the maximum file upload size?"} index={1} showClass={activeAnswers[1]} handleClick={(i)=>displayAnswer(i)}>
          No more than 2GB. All files in your account must fit your allotted storage space.
        </QuestionTile>
        <QuestionTile question={"How do I reset my password?"} index={2} showClass={activeAnswers[2]} handleClick={(i)=>displayAnswer(i)}>
          Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you.
        </QuestionTile>
        <QuestionTile question={"Can I cancel my subscription?"} index={3} showClass={activeAnswers[3]} handleClick={(i)=>displayAnswer(i)}>
          Yes! Send us a message and we’ll process your request no questions asked.
        </QuestionTile>
        <QuestionTile question={"Do you provide additional support?"} index={4} showClass={activeAnswers[4]} handleClick={(i)=>displayAnswer(i)}>
          Chat and email support is available 24/7. Phone lines are open during normal business hours.
        </QuestionTile>
        </div>
      </div>
    </div>
  );
}

export default FaqCard;
