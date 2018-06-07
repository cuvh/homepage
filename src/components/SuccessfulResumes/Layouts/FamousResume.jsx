import React from "react";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";
import FamousHeader from "components/SuccessfulResumes/Sections/FamousHeader";
import Menu from "components/SuccessfulResumes/Sections/Menu";
import LifeProject from "components/SuccessfulResumes/Sections/LifeProject";
import Experience from "components/SuccessfulResumes/Sections/Experience";
import BooksTwo from "components/SuccessfulResumes/Sections/BooksTwo";
import Awards from "components/SuccessfulResumes/Sections/Awards";
import Strengths from "components/SuccessfulResumes/Sections/Strengths";
import TypicalDay from "components/SuccessfulResumes/Sections/TypicalDay";
import BooksFour from "components/SuccessfulResumes/Sections/BooksFour";
import LifePhilosophy from "components/SuccessfulResumes/Sections/LifePhilosophy";
import FamousContainer from "components/SuccessfulResumes/Sections/FamousContainer";

function renderSection(props) {
    if (props.section === "LifeProject") {
        return <LifeProject {...props} />;
    }

    if (props.section === "MostProudOf") {
        return <Awards {...props} />;
    }

    if (props.section === "TypicalDay") {
        return <TypicalDay {...props} />;
    }

    console.log("null");

    return null;
}

export default function FamousResume({
    data: { famousResumesJson: { ...data } }
}) {
    console.log(data);
    return (
        <DefaultLayout>
            <main className="famous-resume--container">
                <FamousHeader
                 name={data.name}
                 cover={data.cover}
                 description={data.description}
                 smallDescription={data.smallDescription}
                />
                <Menu />

                {data.sections.map(item => renderSection(item))}
            </main>
        </DefaultLayout>
    );
}

/*<LifeProject />
<LifePhilosophy />
<Experience />
<TypicalDay />
<BooksFour />
<Awards />
<Strengths />
<BooksTwo />
<FamousContainer />*/

export const pageQuery = graphql`
    query FamousResume($url: String!) {
        famousResumesJson(url: { eq: $url }) {
            name
            url
            smallDescription
            description
            cover {
                childImageSharp {
                    sizes(maxWidth: 2500) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            sections {
                section
                description
                data {
                    title
                    description
                    backgroundColor
                }
            }
        }
    }
`;
