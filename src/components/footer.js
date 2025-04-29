import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterLeft>
                <h3>BlokEDU</h3>
                <p>Own your credentials. Powered by the blockchain.</p>
            </FooterLeft>
            <FooterRight>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/tos">Terms of Service</FooterLink>
                <FooterLink href="https://github.com/mvelak/blok-edu">GitHub</FooterLink>
                <FooterLink href="/">Contact</FooterLink>
            </FooterRight>
        </Container>
    );
}

const Container = styled.footer`
    height: 15vh;
    padding: 2rem 4rem;
    background-color: #111;
    color: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: whitesmoke;
    font-size: 1.25rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #aaa;
  }
`;

const FooterRight = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: dimgray;
  }
`;

export default Footer;