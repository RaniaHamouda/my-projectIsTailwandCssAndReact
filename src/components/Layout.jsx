import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    
    <Fragment>
        <Header/>
        <main>
            <outlet />
        </main>
        <Footer />
    </Fragment>
  )
};
