import React from 'react'
import './questionTile.css'
import DropDownArrow from '../images/arrowIcon.svg'

 const QuestionTile=({children,question,index,showClass,handleClick})=>{
     return (
         <div className="questionTile" onClick={()=>handleClick(index)}>
             <div className={`question ${showClass?`show`:``}`} >
                 {question}
                 <img className={`arrowIcon ${showClass?`show`:``}`} src={DropDownArrow} alt="Answer"/>
             </div>
             <div className={`answer ${showClass?`show`:""}`}>
                 {children}
             </div>
         </div>
     )
 }
 
 export default QuestionTile
 