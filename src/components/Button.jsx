import React from 'react';
import classNames from 'classnames';

// class Button extends React.Component {
//     render (){
//         return (
//             <button className={classNames('button',{
//                 'button--outline': this.props.outline,
//             })}>
//             </button>
//         )
//     }
// }

// const Button= (props)=> {
//     return (
//         <button
//         onClick={props.onClick}
//         className={classNames('button',props.className,  {
//             'button--outline': props.outline,
//         })}>
//             {props.children}
//         </button>
//     )
// }
const Button = ({ onClick, outline, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
