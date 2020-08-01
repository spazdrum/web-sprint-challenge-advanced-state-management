import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurf, fetchData } from "../actions/action";

const Form = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  const handleChanges = (e) => {
    let name = e.target.name;
    setNewSmurf({ ...newSmurf, [name]: e.target.value });
  };

  const handleDelete = (e) => {
    let del = e.target.value;
    setNewSmurf({ ...setNewSmurf, [del]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChanges}
        />
        <br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChanges}
        />
        <br />
        <input
          name="height"
          type="height"
          placeholder="Height"
          onChange={handleChanges}
        />
        <br />
        <input type="submit" onClick={handleSubmit} value="Submit" />
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
  };
};

export default connect(mapStateToProps, { addSmurf, fetchData })(Form);
