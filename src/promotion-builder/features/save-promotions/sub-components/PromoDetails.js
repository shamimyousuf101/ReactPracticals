import React from "react";

const PromoDetails = ({name, url, devices, ventures}) => (
  <dl>
    <dt>Name:</dt>
    <dd>{name}</dd>
    <dt>Url:</dt>
    <dd>{url}</dd>
    <dt>Devices:</dt>
    <dd>{devices.toString()}</dd>
    <dt>Ventures:</dt>
    <dd>{ventures.toString()}</dd>
  </dl>
);

export default PromoDetails;
