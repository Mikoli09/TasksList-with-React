import { MainContainer } from "../../GlobalStyle"
import { MainHeader } from "../../common/MainHeader/styled";
import Section from "../../common/Section";


const AuthorPage = () => (
    <MainContainer>
        <MainHeader>
            Informacje o autorze
        </MainHeader>
        <Section
            headerContent={"Marcin Osojca"}
            sectionContent={"Just some text for sectionContent"}
        />
    </MainContainer>
);

export default AuthorPage;