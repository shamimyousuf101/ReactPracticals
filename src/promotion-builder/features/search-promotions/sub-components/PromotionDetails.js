import React from "react";
import PropTypes from "prop-types";

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
  result: PropTypes.shape({
    devices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    ventures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })
};

export default PromotionDetails;
