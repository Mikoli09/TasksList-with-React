import "./style.css";

const Section = ({ headerContent, sectionContent }) => (

    <section className="section">
        <header className="section__header">{headerContent}</header>
        {sectionContent}
    </section>
);

export default Section;