import React from "react";
import PropsTypes from "prop-types";

const PromotionDetails = ({ result: { name, url, devices, ventures } }) => {
  return (
    <details className="promotionDetails">
      <summary>{name}</summary>
      <dl>
        <dt>Url:</dt>
        <dd>{url}</dd>
        <dt>Devices:</dt>
        <dd>{devices.toString()}</dd>
        <dt>Ventures:</dt>
        <dd>{ventures.toString()}</dd>
      </dl>
    </details>
  );
};

PromotionDetails.propTypes = {
  result: PropsTypes.object.isRequired //FIXME :: use shape to describe
};

export default PromotionDetails;
