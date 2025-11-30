export const CONTACT_PHONE = "+19056401000";
const CONTACT_EMAIL = "";
export const COMPANY_NAME = "Hans Steel Canada";
export const COMPANY_ADDRESS = "6 Sangster Road, Uxbridge, ON, L9P 0G5";

// Phone number formatting functions
export const formatPhoneWithSpaces = () => {
  return CONTACT_PHONE.replace('+1', '+1 ').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};

export const formatPhoneWithParentheses = () => {
  return CONTACT_PHONE.replace('+1', '+1 (').replace(/(\d{3})(\d{3})(\d{4})/, '$1) $2-$3');
};

export const formatPhoneSimple = () => {
  return CONTACT_PHONE.replace('+1', '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};