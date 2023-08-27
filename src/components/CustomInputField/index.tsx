import React from "react";
import styled from "styled-components";

interface ICustomInputFieldProps {
  labelText?: string;
  inputValue?: string;
  id: string;
  inputType?: string;
  inputPlaceholder: string;
  inputName: string;
  isTextarea?: boolean;
  autofocus?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const StyledLabel = styled.label<{
    color?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    margin?: string;
    padding?: string;
    textAlign?: string;
  }>`
    color: ${(props) => (props.color ? props.color : "#da5162")};
    font-family: ${(props) =>
      props.fontFamily ? props.fontFamily : "Montserrat, sans-serif"};
    font-size: 1rem;
    font-weight: ${(props) => props.fontWeight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    text-align: ${(props) => props.textAlign};
  `;

const StyledFormGroup = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

const StyledInput = styled.input<{}>`
  border: 2px dotted #666666;
  &:focus {
    border: 2px solid #da5162;
    box-shadow: 0px 0px 5px 0px rgba(218, 81, 98, 1);
  }
`;

const StyledTextarea = styled.textarea<{}>`
  border: 2px dotted #666666;
  &:focus {
    border: 2px solid #da5162;
    box-shadow: 0px 0px 5px 0px rgba(218, 81, 98, 1);
  }
`;

function CustomInputField(props: ICustomInputFieldProps) {
  const {
    labelText,
    inputValue,
    id,
    inputType,
    inputPlaceholder,
    inputName,
    isTextarea,
    autofocus,
    required,
    disabled,
  } = props;

  return (
    <StyledFormGroup className="form-group">
      {labelText && (
        <StyledLabel htmlFor={id} fontWeight="bold" margin="0 0 8px 0">
          {labelText}
        </StyledLabel>
      )}
      {isTextarea ? (
        <StyledTextarea
          className="form-control"
          value={inputValue}
          id={id}
          placeholder={inputPlaceholder}
          name={inputName}
          rows={6}
          autoFocus={autofocus}
          required={required}
          disabled={disabled}
        />
      ) : (
        <StyledInput
          className="form-control"
          value={inputValue}
          id={id}
          type={inputType || "text"}
          placeholder={inputPlaceholder}
          name={inputName}
          autoFocus={autofocus}
          required={required}
          disabled={disabled}
        />
      )}
    </StyledFormGroup>
  );
}

export default CustomInputField;
