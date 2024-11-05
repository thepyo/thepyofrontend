import Footer from "./main/footer";
import Header from "./main/header";

export default function MainLayout({config, navbar, children}){
    return(
        <>
            <Header navbar={navbar}/>
            {children}
            <Footer data={config}/>
        </>
    )
}