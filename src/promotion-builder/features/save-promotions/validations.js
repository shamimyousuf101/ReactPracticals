export const isFormDataValid = formData => {
  const { name, url, devices, ventures } = formData;
  let isFormDataEmpty = true;
  if (
    name !== "" &&
    url !== "" &&
    devices.length !== 0 &&
    ventures.length !== 0
  ) {
    isFormDataEmpty = false;
  }
  return isFormDataEmpty;
};
