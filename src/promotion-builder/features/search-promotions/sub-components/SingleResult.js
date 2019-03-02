import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./singleresult.css";
import PromotionDetails from "./PromotionDetails";
import EditButton from "./EditButton";


const b = bem("singlesearchresult");

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
