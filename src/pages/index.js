import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import HeroTitle from "../components/HeroTitle";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className="mb-10">
          <HeroTitle />
        </div>

        <p className="hero__subtitle">{siteConfig.index}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg rounded-3xl hover:scale-110 dark:hover:text-white"
            to="/docs/category/SBD"
          >
            Start Exploring!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
