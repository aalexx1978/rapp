import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import moment from 'moment';
const ModalInfo = (props) => {
    const handleClose = (e) =>{
        props.handleModal({"modal":false, "info": null});
    }
    const comments = props.info && props.info.children.filter((c)=>{
       return (c.author!==null && c.text!==null)
    }).map((c,i)=>{
        return (
  <Toast key={"comments_"+i}>
    <Toast.Header>
      <strong className="mr-auto">{c.author}</strong>
        <small>{moment(c.created_at).fromNow()}</small>
    </Toast.Header>
        <Toast.Body>{c.text}</Toast.Body>
  </Toast>);
  });

    return (
        <Modal animation={false} show={props.show} onHide={()=>handleClose()}>
          <Modal.Header closeButton>
    <Modal.Title>{props.info&&props.info.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{maxHeight:"50vh", overflow:"auto"}}>
              {props.info && (props.info.type +" by " + props.info.author + " "  + moment(props.info.created_at).fromNow())}<br />
              {props.info && ("Points: " + props.info.points)}
              <br />{comments && comments.length>0?comments: "no comments"}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
  export default ModalInfo;