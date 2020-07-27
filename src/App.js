import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "./actions/appActions";
import Container from 'react-bootstrap/Container';
import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import Main from "./component/Main"

const App = (props) =>{
  return (
      <Container>

<Navbar bg="primary" id="navbar" variant="dark">
<Navbar.Brand href="/">
      <img
        id="logo"
        src="./logo.svg"
        width="40"
        height="40"
        className="App-logo d-inline-block align-top"
        alt="Rapp logo"
      />
    </Navbar.Brand>
    <Navbar.Brand href="/">RaPP</Navbar.Brand>
  </Navbar>
          {props.error &&  <Alert variant="danger">
             Error: {props.error}
          </Alert>}
          <Main {...props}/>
      </Container>
  );
}

function mapStateToProps(state) {
    return {
        data: state.appRed.data,
        error: state.appRed.error,
        show: state.appRed.show,
        loading: state.appRed.loading,
        search: state.appRed.search,
        page: state.appRed.page,
        items: state.appRed.items,
        pages: state.appRed.pages,
        modal: state.appRed.modal,
        info: state.appRed.info
    };
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
