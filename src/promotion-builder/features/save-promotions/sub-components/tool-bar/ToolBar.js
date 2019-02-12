import React from "react";
import PropsTypes from "prop-types";
import isEqual from "lodash.isequal";

import "./toolbar.css";
import { mapToArray } from "../../../../../utils/utils";

import block from "bem-cn";
const b = block("promotion-toolbar");

const ToolBar = ({
  formData,
  savePromotion,
  reset,
  selectedPromotionId,
  promotionData
}) => {
  const checkAllFieldHasData = formData => {
    return !(
      formData.devices.size === 0 ||
      formData.ventures.size === 0 ||
      formData.url === "" ||
      formData.name === ""
    );
  };
  const checkAnyFieldHasData = formData => {
    return (
      formData.devices.size === 0 &&
      formData.ventures.size === 0 &&
      formData.url === "" &&
      formData.name === ""
    );
  };

  const isFormDataSame = (id, formData, promotionData) => {
    let initialFormData = {
      id: 0,
      devices: [],
      ventures: [],
      url: "",
      name: ""
    };

    let sameData = true;

    const promotionArray = mapToArray(promotionData);

    initialFormData = promotionArray.filter(el => el.id === id)[0];

    let cloneOfInitialFormData = Object.assign({}, initialFormData);
    delete cloneOfInitialFormData.lastUpdatedTime;

    if (cloneOfInitialFormData) {
      cloneOfInitialFormData = Object.assign({}, cloneOfInitialFormData, {
        devices: cloneOfInitialFormData.devices,
        ventures: cloneOfInitialFormData.ventures
      });
      sameData = isEqual(cloneOfInitialFormData, formData);
    } else {
      sameData = false;
    }

    return sameData;
  };

  const isSaveButtonDisabled = (id, formData, promotionData) => {
    let hasDataInAllFields = checkAllFieldHasData(formData);
    let disabled = true;

    if (hasDataInAllFields) {
      disabled = isFormDataSame(id, formData, promotionData);
    } else {
      disabled = !hasDataInAllFields;
    }

    return disabled;
  };

  return (
    <div className={b()}>
      <button
        className={b("button-save")}
        disabled={isSaveButtonDisabled(
          selectedPromotionId,
          formData,
          promotionData
        )}
        onClick={savePromotion}
      >
        Save
      </button>
      <button
        className={b("button-reset")}
        disabled={checkAnyFieldHasData(formData)}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

ToolBar.propTypes = {
  selectedPromotionId: PropsTypes.string,
  searchDisplay: PropsTypes.object.isRequired,
  formData: PropsTypes.object.isRequired,
  savePromotion: PropsTypes.func.isRequired,
  reset: PropsTypes.func.isRequired
};

export default ToolBar;
