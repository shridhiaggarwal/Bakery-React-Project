import styled from "styled-components";
import Typography from "../../components/Typography";
import ContactForm from "./containers/ContactForm";
import MapComponent from "../../components/MapComponent";

interface IContactPageProps {}

interface IContactInfoItemProps {
  iconClassName: string;
  value: string;
}

const ContactSection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

const ContactInfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ContactInfoIcon = styled.i`
  color: #da5162;
  margin-right: 8px;
`;

function ContactInfoItem(props: IContactInfoItemProps) {
  const { iconClassName, value } = props;
  return (
    <ContactInfo>
      <ContactInfoIcon
        className={iconClassName}
        aria-hidden="true"
      ></ContactInfoIcon>
      <Typography variant="body1" fontWeight="bold" margin="0 16px 0 0">
        {value}
      </Typography>
    </ContactInfo>
  );
}

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
      <ContactInfoBox>
        <ContactInfoItem
          iconClassName="fa fa-map-marker"
          value="Block B, Kamla Nagar, Delhi, India"
        />
        <ContactInfoItem iconClassName="fa fa-phone" value="+91 9876543210" />
        <ContactInfoItem
          iconClassName="fa fa-clock-o"
          value="Mon-Sat: 9 A.M. - 5 P.M."
        />
      </ContactInfoBox>
      <ContactForm margin="20px 0 0 0" />
      <MapComponent
        location={{
          id: "bakery",
          position: [28.680911, 77.204587],
          name: "Bakery!",
        }}
        zoom={16}
        zoomControl={true}
        scrollWheelZoom={true}
        width="100%"
        height="400px"
        margin="48px 0 0 0"
        border="2px dotted #da5162"
        borderRadius="8px"
      />
    </ContactSection>
  );
}

export default ContactPage;
