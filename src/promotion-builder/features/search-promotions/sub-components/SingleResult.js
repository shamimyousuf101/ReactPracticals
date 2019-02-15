import React from "react";
import PropsTypes from "prop-types";

import PromotionDetails from "./PromotionDetails";
import EditButton from "./EditButton";

import "./singleresult.css";

import bem from "bem-cn";
const b = bem("singlesearchresult");

const SingleResult = ({ result, id, editBtnClick }) => {
  return (
    <section className={b()}>
      <PromotionDetails result={result} />
      <EditButton id={id} editBtnClick={editBtnClick} result={result} />
    </section>
  );
};

SingleResult.propTypes = {
  result: PropsTypes.object,
  id: PropsTypes.string,
  editBtnClick: PropsTypes.func.isRequired
};

export default SingleResult;
