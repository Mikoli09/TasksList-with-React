import { MainContainer } from "../../common/MainContainer/styled";
import { MainHeader } from "../../common/MainHeader/styled";
import Section from "../../common/Section";
import { Img } from "./styled";
import { Paragraph } from "../../common/Paragraph/styled";

const AuthorPage = () => (
    <MainContainer>
        <MainHeader>
            O autorze
        </MainHeader>
        <Section
            headerContent={"Marcin Osojca"}
            sectionContent={
                <>
                    <Img src={`${process.env.PUBLIC_URL}/assets/Marcin.jpg`} alt="Marcin" />
                    <Paragraph> Jestem Marcin, mam 30 lat. Pracuje jako automatyk i często podróżuje. W wolnym czasie udaje się w góry,
                        gdzie najchętniej spędzam czas i resetuję głowe od codziennego życia.</Paragraph>
                    <Paragraph> Drugim sposobem na oderwanie się od rutyny jest czytanie książek.</Paragraph>
                    <Paragraph>W wolnych chwilach staram się uczyć języka niemieckiego oraz sumiennie pracować nad Frontendem.</Paragraph>
                </>
            }
        />
    </MainContainer>
);

export default AuthorPage;