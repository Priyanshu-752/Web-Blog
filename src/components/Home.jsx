import { useLocation } from "react-router";
import '../style/home.css'
import Header from './Header'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
 }
