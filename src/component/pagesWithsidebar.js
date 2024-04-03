import Header from "./sidebar";
import '../sidebar.css'
export default function SidebarPage({children}){
    return(
          <div className="side-bar w-full h-full p-0 m-0">
          <Header/>
          <div className="w-full overflow-auto lg:p-[40px] p-[20px] h-full bg-white shadow-md">{children}</div>
          </div>
    );
}