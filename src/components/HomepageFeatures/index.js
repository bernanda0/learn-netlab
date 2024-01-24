import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const SubjectList = [
  {
    title: "Database System",
    Svg: require("@site/static/img/SBD_illustration_notext.svg").default,
    navigate: "/docs/category/SBD",
    description: (
      <>
        Covers the fundamentals of relational and non-relational databases,
        emphasizing data modeling through Entity-Relationship Diagrams (ERDs),
        and practical implementation in web applications.
      </>
    ),
  },
];

function Feature({ Svg, title, navigate, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Link 
          to={navigate}>
          <Svg
            className="w-80 h-60 hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
            role="img"
          />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SubjectList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
