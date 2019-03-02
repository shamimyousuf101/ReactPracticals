import React from "react";
import PropsTypes from "prop-types";

import PromotionDetails from "./PromotionDetails";
import EditButton from "./EditButton";

import "./singleresult.css";

import bem from "bem-cn";
const b = bem("singlesearchresult");
//use a spread operator {...props}
const SingleResult = ({ result, editBtnClick }) => (
  <li className={b()}>
    <PromotionDetails result={result} />
    <EditButton editBtnClick={editBtnClick} id={result.id} />
  </li>
);

SingleResult.propTypes = {
  result: PropsTypes.object,
  id: PropsTypes.string,
  editBtnClick: PropsTypes.func.isRequired
};

export default SingleResult;
