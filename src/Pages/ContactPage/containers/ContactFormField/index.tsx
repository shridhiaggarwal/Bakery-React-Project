import React from "react";
import styled from "styled-components";

interface IContactFormFieldProps {
  labelText?: string;
  id: string;
  inputType?: string;
  inputPlaceholder: string;
  inputName: string;
  isTextarea?: boolean;
  autofocus?: boolean;
  required?: boolean;
}

const StyledFormGroup = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

const StyledInput = styled.input<{}>`
  border: 2px dotted #da5162;
  &:focus {
    border: 2px solid #da5162;
    box-shadow: 1px 1px 8px 0px rgba(218, 81, 98, 1);
  }
`;

const StyledTextarea = styled.textarea<{}>`
  border: 2px dotted #da5162;
  &:focus {
    border: 2px solid #da5162;
    box-shadow: 1px 1px 10px 0px rgba(218, 81, 98, 1);
  }
`;

function ContactFormField(props: IContactFormFieldProps) {
  const {
    labelText,
    id,
    inputType,
    inputPlaceholder,
    inputName,
    isTextarea,
    autofocus,
    required,
  } = props;

  return (
    <StyledFormGroup className="form-group">
      {labelText && <label>{labelText}</label>}
      {isTextarea ? (
        <StyledTextarea
          className="form-control"
          id={id}
          placeholder={inputPlaceholder}
          name={inputName}
          rows={6}
          autoFocus={autofocus}
          required={required}
        />
      ) : (
        <StyledInput
          className="form-control"
          id={id}
          type={inputType || "text"}
          placeholder={inputPlaceholder}
          name={inputName}
          autoFocus={autofocus}
          required={required}
        />
      )}
    </StyledFormGroup>
  );
}

export default ContactFormField;
