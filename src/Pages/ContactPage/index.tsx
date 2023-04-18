import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import Images from "../../components/Images";
import TitleSubtitleButtonBox from "../../components/TitleSubtitleButtonBox";

interface IContactPageProps {}

const ContactSection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactInfoIcon = styled.i`
  color: #da5162;
  margin-right: 8px;
`;

const ContactInfoText = styled.p`
  margin-right: 16px;
`;

function ContactPage(props: IContactPageProps) {
  return (
    <ContactSection>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 1rem 0"
        textAlign="center"
      >
        Get in touch with us
      </Typography>
      <Typography variant="body1" margin="0 0 1rem 0" textAlign="center">
        We'd love to hear from you! Contact us with any questions or comments.
      </Typography>
      <ContactInfo>
        <ContactInfoIcon
          className="fa fa-map-marker"
          aria-hidden="true"
        ></ContactInfoIcon>
        <ContactInfoText>Block B, Kamla Nagar, Delhi, India</ContactInfoText>
        <ContactInfoIcon
          className="fa fa-phone"
          aria-hidden="true"
        ></ContactInfoIcon>
        <ContactInfoText>+91 9876543210</ContactInfoText>
        <ContactInfoIcon
          className="fa fa-clock-o"
          aria-hidden="true"
        ></ContactInfoIcon>
        <ContactInfoText>Mon-Sat: 9 A.M. - 5 P.M.</ContactInfoText>
      </ContactInfo>
      <div className="contact-form">
        <div className="container">
          <form role="form">
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control"
                  id="Subject"
                  placeholder="Subject"
                />
              </div>
              <div className="col-md-8">
                {/* <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                >
                  {" "}
                  Message...
                </textarea> */}
                <center>
                  <button type="button" className="form_submit submit-btn">
                    {" "}
                    SEND
                  </button>
                </center>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContactSection>
  );
}

export default ContactPage;
