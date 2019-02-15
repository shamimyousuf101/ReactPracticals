import React from "react";
import PropsTypes from "prop-types";

const PromotionDetails = ({ result }) => {
  const { name, url, devices, ventures } = result;

  return (
    <details className="promotionDetails">
      <summary>{name}</summary>
        <dl>
          <dt> <b>Url: </b> {url}</dt>
          <dt><b>Devices: </b>{devices.toString()}</dt>
          <dt><b>Ventures: </b> {ventures.toString()}</dt>
        </dl>
    </details>
  );
};

PromotionDetails.propTypes = {
  result: PropsTypes.object.isRequired
};

export default PromotionDetails;
