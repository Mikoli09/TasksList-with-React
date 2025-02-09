import { SectionStyled, Header } from "./styled";


const Section = ({ headerContent, sectionContent }) => (
    <SectionStyled>
        <Header>{headerContent}</Header>
        {sectionContent}
    </SectionStyled>
);

export default Section;