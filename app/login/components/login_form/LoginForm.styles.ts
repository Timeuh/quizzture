import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : login container
export const cLogin_login = vstack({
  gap: 4,
});

// css : input field
export const cLogin_input = css({
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
export const cLogin_label = vstack({
  gap: 1,
  alignItems: 'start',
  fontSize: 'lg',
  w: '20vw',
});

// css : submit button
export const cLogin_submit = hstack({
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

// css : input error
export const cLogin_inputError = (error: boolean) => {
  return css({
    border: '2px solid',
    borderColor: error ? 'red.500' : 'none',
    color: error ? 'red.500' : 'none',
  });
};

// css : error message
export const cLogin_error = css({
  color: 'red.500',
  fontSize: 'lg',
});
