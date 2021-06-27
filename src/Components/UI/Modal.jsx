import React from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};


const portalElemnt= document.getElementById('overlays');
const Modal = (props) => {

    return(
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} / >,portalElemnt)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElemnt)}
    </React.Fragment>
    );
};

export default Modal;
