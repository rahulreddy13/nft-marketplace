import NavHeader from "./NavHeader";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <NavHeader />
             <div className="content-body">
                { children }
             </div>
        </div>
    );
}

export default Layout;