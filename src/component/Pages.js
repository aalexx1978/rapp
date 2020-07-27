
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Pages = props => {
    const handleClick = (e, a) =>{
        props.setPage(a-1);
        e.preventDefault();
    }
    const pagination = [];
    for(let a=1;a<=props.totalpages+1;a++){
        pagination.push(<Pagination.Item onClick={(e)=>{handleClick(e,a)}} key={a} active={a === props.pagenum+1}> {a}</Pagination.Item>)         
        if(a>=10){
            pagination.push(<Pagination.Ellipsis key={a+1}/>)
            break;
        }
    }
    return(
        <Pagination style={{margin:"5px auto"}}>
{pagination}
        </Pagination>)};
export default Pages;
