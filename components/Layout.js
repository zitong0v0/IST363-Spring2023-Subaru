//core
import { Fragment } from "react"

import Header from './Header';
import Footer from './Footer';

//components
const Layout = ({children}) => {

    return <Fragment>
        <Header />
       
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
}
export default Layout