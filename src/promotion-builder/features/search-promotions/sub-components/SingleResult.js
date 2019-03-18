import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./singleresult.css";
import PromotionDetails from "./PromotionDetails";
import EditButton from "./EditButton";

const b = bem("singlesearchresult");

const SingleResult = ({ result, editBtnClick, view }) => (
  <li className={b()}>
    <PromotionDetails result={result} />
    <EditButton editBtnClick={editBtnClick} id={result.id} view={view} />
  </li>
);

SingleResult.propTypes = {
  result: PropsTypes.object,
  editBtnClick: PropsTypes.func.isRequired
};

export default SingleResult;
