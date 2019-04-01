import React from "react";

  // TODO - Would break this component down into smaller components
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
