import React from "react";
import ContactFormField from "../ContactFormField";
import Button from "../../../../components/Button";
import styled from "styled-components";
import Images from "../../../../components/Images";
import ImageBox from "../../../../components/ImageBox";

interface IContactFormProps {
  margin?: string;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

const StyledRow = styled.div`
  align-items: flex-end;
  justify-content: center;
`;

const StyledImageBox = styled(ImageBox)`
  width: 400px;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
  @media only screen and (max-width: 576px) {
    display: none !important;
  }
`;

function ContactForm(props: IContactFormProps) {
  const { margin } = props;

  const handleSubmitClick = () => {};

  return (
    <StyledForm margin={margin}>
      <StyledRow className="row">
        <div className="col-md-6">
          <ContactFormField
            id="name"
            inputType="text"
            inputPlaceholder="Name"
            inputName="name"
            required={true}
          />
          <ContactFormField
            id="email"
            inputType="email"
            inputPlaceholder="Email"
            inputName="email"
            required={true}
          />
          <ContactFormField
            id="subject"
            inputType="text"
            inputPlaceholder="Subject"
            inputName="subject"
            required={true}
          />
          <ContactFormField
            id="message"
            inputPlaceholder="Message..."
            inputName="message"
            isTextarea={true}
            required={true}
          />
        </div>
        <div className="col-md-5">
          <StyledImageBox imageSrc={Images.CAKE_ELEMENT6} />
        </div>
      </StyledRow>
      <CenterDiv>
        <Button onButtonClick={handleSubmitClick} marginTop={"1rem"}>
          Send message
        </Button>
      </CenterDiv>
    </StyledForm>
  );
}

export default ContactForm;
