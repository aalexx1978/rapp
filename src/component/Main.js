import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import Item from "./Item";
import Row from 'react-bootstrap/Row';
import Search from "./Search";
import Pages from "./Pages";
import ModalInfo from "./ModalInfo";
import {fetchData, isLoading} from "../actions/appActions"
const Main = props => {
   
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
           isLoading(true);
            await dispatch(fetchData());
        };
        loadData();
    }, [dispatch]);
    const handleSearch = (term) =>{
        props.appActions.page(0);
        props.appActions.search(term);
        props.appActions.fetchData({"search":term, "page":0, "items":props.items, "offset":props.offset})
    }
    const handlePage = async (p) =>{
        props.appActions.page(p);
        props.appActions.fetchData({"search":props.search, "page":p, "items":props.items, "offset":props.offset})
    }
    const articles = props.data.length<=0?[]:props.data;
    const pagination = articles.length>0? <Row><Pages pagenum={props.page} totalpages={props.pages} setPage={handlePage}/></Row>:''
        return(
        <div id="main">
            <ModalInfo show={props.modal} info={props.info} handleModal={props.appActions.showModal}/>
            <Row>
                 <Search search={props.search} fSearch={handleSearch} loading={props.loading}/>
               
            </Row> 
     
            {pagination }
        
            <Row>{articles.map(el=>{return  <Item key={el.objectID} getInfo={props.appActions.fetchInfo} info={el}/>})}</Row>
           {pagination }
        </div>);
}



export default Main;