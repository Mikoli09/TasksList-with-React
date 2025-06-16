import { ReactNode } from "react";
import { SectionStyled, Header } from "./styled";

interface SectionProps {
    headerContent: ReactNode,
    sectionContent: ReactNode,
}

const Section = ({ headerContent, sectionContent }: SectionProps) => (
    <SectionStyled>
        <Header>{headerContent}</Header>
        {sectionContent}
    </SectionStyled>
);

export default Section;