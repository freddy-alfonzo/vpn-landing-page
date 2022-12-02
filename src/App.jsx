import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Product,
  CardDeal,
  Testimonials,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      <main>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Product />
            <CardDeal />
            <Testimonials />
            <CTA />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
