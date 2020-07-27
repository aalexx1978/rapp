import React, {useState}  from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Fade from 'react-bootstrap/Fade';
const Item = props => {
    const [open, setOpen] = useState(true);
    const handleInfo = (e, who) =>{
        props.getInfo(who);
        e.preventDefault();
    }
    return (open&& (<Fade in={open}><Card style={{ width: '20rem',margin: '5px auto  5px' }}>
        <Card.Body>
            <Card.Title onClick={(e)=>{handleInfo(e, props.info.objectID)}}>{(props.info.title===null&& "- no title -") || props.info.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.info.author}</Card.Subtitle>
            <Card.Text>
                Created: {moment(props.info.created_at).format("MMM Do YY")}<br />
                Points: {props.info.points} <br />
                Comments: {props.info.num_comments || "-"}
            </Card.Text>
            {props.info.url!==null && <Card.Link target="_blank" href={props.info.url}> > link</Card.Link>}
           <FontAwesomeIcon style={{float: "right", color:"red", cursor:"pointer"}} onClick={() => setOpen(!open)} icon={faTrashAlt} />
        </Card.Body>
    </Card></Fade>))||null ;

};
export default Item;
