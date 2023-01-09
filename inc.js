import React from "react";
import { connect } from "react-redux";

const Inc = ({ count, increase, decrease }) => {
  return (
    <div>
      Inc : {count} <br /> <br />
      <button onClick={() => increase()}>increment</button> &nbsp; &nbsp;
      <button onClick={() => decrease()}>increment</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
    decrease: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inc);
