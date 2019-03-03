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
  // result: React.PropTypes.shape({
  //   devices: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  //   id: React.PropTypes.string.isRequired,
  //   name: React.PropTypes.string.isRequired,
  //   url: React.PropTypes.string.isRequired,
  //   ventures: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired
  // })
};

export default PromotionDetails;
