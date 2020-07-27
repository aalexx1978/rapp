import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
const Search = props => {
    const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const handleClick = () =>{
    props.fSearch(searchTerm)
  }
  const handleSubmit = (e) =>{
    props.fSearch(searchTerm)
      e.preventDefault();
  }
    return(
        <Form id="search" onSubmit={(e)=>{handleSubmit(e)}} inline style={{margin: "15px auto"}}>


<InputGroup className="mb-3">
    <FormControl
      placeholder="..."
      aria-label="text to search"
      aria-describedby="search"
      value={searchTerm}
        onChange={handleChange} id="inlineFormInputName"  
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={handleClick}>
      { (props.loading &&    <Spinner animation="border" 
            as="span"
            size="sm"
            role="status"
            aria-hidden="true"/>
            )|| "Search"}
      </Button>
    </InputGroup.Append>
  </InputGroup>          
    </Form>)};
export default Search;
