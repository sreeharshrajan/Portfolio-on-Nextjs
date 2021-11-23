import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

export const BUTTON_MODIFIERS = {
  small: () => `
        font-size: 0.8rem;
        padding: 8px;
    `,
  large: () => `
        font-size: 1.1rem;
        padding: 16px 24px;
    `,
  // WARNING
  warning: () => `
        background-color: #e1c542;
        color: #ffffff;

        &:hover, &:focus {
            background-color: #cab23f;
            outline: 3px solid #cab23f;
        }

        &:active {
            background-color: #b49e35;
        }
    `,
  primaryButtonWarning: () => `
        background-color: #e1c542;
        color: #ffffff;
    `,

  // ERROR
  error: () => `
        background: none;
        color: #d0454c;

        &:hover, &:focus {
        background-color: #b54248;
        outline: 3px solid #b54248;
        outline-offset: 2px;
        border: 2px solid transparent;
        }

        &:active {
            background-color: #95353a;
        }
    `,
  primaryButtonError: () => `
        background-color: #d0454c;
        color: #ffffff;
        border: 2px solid #d0454c;

        &:hover, &:focus {
            color:  #ffffff;
        }
    `,

  // SUCCESS
  success: () => `
        background: none;
        color: #529e66;

        &:hover, &:focus {
        background-color: #367b48;
        outline: 3px solid #367b48;
        }

        &:active {
            background-color: #276738;
        }
    `,
  primaryButtonSuccess: () => `
        background-color:  #529e66;
        color:  #ffffff;

        &:hover, &:focus {
            color:  #ffffff;
        }
    `,
};

const Button = styled.button`
  padding: 12px 24px;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 2px;
  border: none;
  min-width: 1 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: 0.2s linear;
`;

export const PrimaryButton = styled(Button)`
  //CSS
  background-color: #0066cc;
  border: none;
  color: #fff;

  &:hover {
    background-color: #00468b;
    color: #fff;
  }

  &:focus {
    outline: 3px solid #001d39;
    outline-offset: 2px;
  }

  &:active {
    background-color: #001d39;
    border-color: #001d39;
    color: #ffffff;
  }

  &:disabled {
    background-color: #737581;
    color: #e1e1e1;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid #001d39;
  color: #001d39;

  &:hover {
    background-color: #e5f0fa;
    color: #001d39;
  }

  &:focus {
    outline: 3px solid #001d39;
    outline-offset: 2px;
  }

  &:active {
    background-color: #cce0f5;
  }

  &:disabled {
    background: none;
    background-color: #737581;
    color: #e1e1e1;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
