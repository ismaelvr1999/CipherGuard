import { Icon } from "@iconify/react";
import '../../styles/home/summary.css';

const Summary = ({totalWebsiteAccounts,totalCreditCards,totalPassports})=>{
 return(
    <div className="summary-container">
    <div className="summary-card">
      <Icon
        className="summary-icon"
        icon="material-symbols-light:password"
      />
      <h3>{totalWebsiteAccounts && totalWebsiteAccounts.title}</h3>
       <h3>{totalWebsiteAccounts && totalWebsiteAccounts.total}</h3>
    </div>
    <div className="summary-card">
      <Icon className="summary-icon" icon="quill:creditcard" />
      <h3>{totalCreditCards && totalCreditCards.title}</h3>
      <h3>{totalCreditCards && totalCreditCards.total}</h3>
    </div>
    <div className="summary-card">
      <Icon className="summary-icon" icon="solar:passport-outline" />
      <h3>{totalPassports && totalPassports.title}</h3>
      <h3>{totalPassports && totalPassports.total}</h3>
    </div>
  </div>
 );
};

export default Summary;