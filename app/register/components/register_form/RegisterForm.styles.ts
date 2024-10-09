import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : register form container
export const cRegister_register = vstack({
  gap: 4,
});

// css : input field
export const cRegister_input = css({
  bg: 'platinum.light',
  color: 'platinum.dark',
  outlineColor: 'platinum.dark',
  _placeholder: {
    color: 'platinum.main',
  },
  fontSize: 'lg',
  borderRadius: 'md',
  p: 2,
  w: 'full',
});

// css : input label
export const cRegister_label = vstack({
  gap: 1,
  alignItems: 'start',
  fontSize: 'lg',
  w: '20vw',
});

// css : submit button
export const cRegister_submit = hstack({
  bg: {
    base: 'nyanza.300',
    _hover: 'nyanza.main',
  },
  borderRadius: 'md',
  color: 'platinum.dark',
  outlineColor: 'platinum.dark',
  p: 2,
  mt: 8,
  gap: 0,
  fontSize: 'xl',
  justifyContent: 'center',
  w: '20vw',
  transition: 'background-color 0.5s',
  cursor: 'pointer',
});

// css : input field error
export const cRegister_inputError = (error: boolean) => {
  return css({
    border: '2px solid',
    borderColor: error ? 'red.500' : 'none',
    color: error ? 'red.500' : 'none',
  });
};

// css : error message
export const cRegister_error = css({
  color: 'red.500',
  fontSize: 'lg',
});

// css : user images container
export const cRegister_userImages = hstack({
  gap: 0,
  w: 'full',
  justifyContent: 'space-between',
});

// css : user image
export const cRegister_userImage = (isSelected: boolean) => {
  return css({
    border: '2px solid',
    borderColor: isSelected ? 'red.500' : 'none',
    borderRadius: 'full',
  });
};
