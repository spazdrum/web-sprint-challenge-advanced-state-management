import React from "react";
import Card from "./Card";
import { fetchData } from "../actions/action";
import { connect } from "react-redux";

const smurf = (props) => {
  const fetchSmurfs = (e) => {
    e.preventDefault();
    props.fetchData();
  };
  return (
    <div>
      {props.isFetching && <p>Fetching Characters</p>}
      {props.data.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.err
    }
}

export default connect(mapStateToProps, {data})(Smurf)