import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import CardView from "../CardView";

const SubjectList = [
    {
      card_bg: require("@site/static/img/card-bg.jpg").default,
      icon: require("@site/static/img/sbd-icon.png").default,
      title: "Database System (SBD)",
      description: " Covers the fundamentals of relational and non-relational databases through practical implementation in web apps.",
      navigate: "/docs/category/SBD",
    },
    {
      card_bg: require("@site/static/img/card-bg.jpg").default,
      icon: require("@site/static/img/dmj-icon.png").default,
      title: "Desain Manajemen Jaringan (DMJ)",
      description: "Learn how to design a network with the large scale by considering aspects of scalability and reliability.",
      navigate: "/docs/category/DMJ",
    },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
     
      <div className="container mb-12">
        <div className="row">
          {SubjectList.map((props, idx) => (
            <CardView key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
