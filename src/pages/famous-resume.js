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

export default function FamousResume() {
    return (
        <DefaultLayout>
            <main className="famous-resume--container">
                <FamousHeader />
                <Menu />
                <LifePhilosophy />
                <Experience />
                <LifeProject />
                <TypicalDay />
                <BooksFour />
                <Awards />
                <Strengths />
                <BooksTwo />
                <FamousContainer />
            </main>
        </DefaultLayout>
    );
}
