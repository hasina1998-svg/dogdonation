import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Box, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./form.css";
import Normal from "./Normal";
import Table from "./Table";
const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const[show,setShow]=useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disable, setDisable] = useState(true);
  const handleTextChange = (event) => {
    if (event.target.value.length !== 0) {
      setDisable(!disable);
    } else {
      alert("invalid");
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    if (data.name !== "" && data.price !== "" && data.tag !== "") {
      setName(data.name);
      setPrice(data.price);
      setTag(data.tag);
setShow(!show)
      console.log(data);
      reset();
      // alert('successfully submitted')
    } else {
      alert("requirement not fulfilled");
    }
  };
  return (
    <Box boxSize={"400px"} m={6}>
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleTextChange}>
        <label>name</label>
        <input {...register("name")} />
        <br />
        <label>price</label>
        <input {...register("price")} />
        <br />
        <label>tag</label>
        <input {...register("tag")} />
        <br />

        <Button type="submit" disabled={disable}>
          {" "}
          submit
        </Button>
        {/* <Normal name={name} price={price} tag={tag}/> */}
        {/* <Table name={name} price={price} tag={tag}  /> */}

{
  show?<>
          <div className="normal-container" id="normal">
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>Tag:{tag}</p>
         
        </div>
  </>:
  <>
          <table>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>tag</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{tag}</td>
          </tr>
        </table>
  </>
}
<br/>
    {/* <ButtonGroup>
       <Button > view in card</Button>
 <Button > view in table</Button>

     
      </ButtonGroup>  */}

      </form>
      {/* <ButtonGroup>
        <Link to='/card'><Button > view in card</Button></Link>
  <Link to='/table'><Button > view in table</Button></Link>

        <Button> view in card</Button>
      </ButtonGroup> */}
      {/* <Box>
        <div className="normal-container" id="normal">
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>Tag:{tag}</p>
         
        </div>

        <table>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>tag</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{tag}</td>
          </tr>
        </table>
      </Box> */}
    </Box>
  );
};

export default Form;
