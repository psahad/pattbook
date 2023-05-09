export const mandatoryValidate = (input) => {
  if (input.trim().length === 0) {
    return {
        isValid: false,
        msg: "validations.mandatory"
    }
  }

  return {
    isValid: true,
    msg: ""
}
}
