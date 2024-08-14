import "../../styles/home/home.css";

import Header from "../layout/header";
import Profile from "./profile";
import Summary from "./summary";
import useHome from "../../hooks/home/useHome";

const Home = () => {
  const {user,totalWebsiteAccounts,cardTotal,passportsTotal} = useHome();
  return (
    <>
      <Header title={user && `Welcome ${user.data.first_name}` } />
      <div className="grid-section">
        <Profile user={user} />

        <Summary totalWebsiteAccounts={totalWebsiteAccounts} 
        totalCreditCards={cardTotal}
        totalPassports={passportsTotal}/>
      </div>
    </>
  );
};
export default Home;
