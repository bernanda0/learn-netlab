import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const SubjectList = [
  {
    title: "Database System (SBD)",
    Svg: require("@site/static/img/SBD_illustration_simple.svg").default,
    navigate: "/docs/category/SBD",
    description: (
      <>
        Covers the fundamentals of relational and non-relational databases
        through practical implementation in web apps.
      </>
    ),
  },
  {
    title: "Desain Manajemen Jaringan (DMJ)",
    Svg: require("@site/static/img/DMJ_illustration_simple.svg").default,
    navigate: "/docs/category/DMJ",
    description: (
      <>
        Learn how to design a network with the large scale by considering
        aspects of scalability and reliability.
      </>
    ),
  },
];

function Feature({ Svg, title, navigate, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Link to={navigate}>
          <Svg
            className="h-60 w-40 hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
            role="img"
          />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="font-mono">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mb-12">
        <div className="row">
          {SubjectList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
