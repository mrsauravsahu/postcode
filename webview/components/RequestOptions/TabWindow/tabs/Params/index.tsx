import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const Params = (props) => {
  const { params, setParams } = props;
  return (
    <div className="params-wrapper">
      <KeyValueTable data={params} setData={setParams} />
    </div>
  );
};

Params.propTypes = {
  params: propTypes.array.isRequired,
  setParams: propTypes.func.isRequired,
};
