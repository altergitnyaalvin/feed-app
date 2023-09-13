import Footer from "../components/Footer"
import Header from "../components/Header"
import './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout