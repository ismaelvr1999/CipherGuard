import { Icon } from "@iconify/react";
import '../../styles/summary.css'

const Summary = ({totalWebsiteAccounts,totalCreditCards,totalIDs})=>{
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
      <Icon className="summary-icon" icon="solar:user-outline" />
      <h3>{totalIDs && totalIDs.title}</h3>
      <h3>{totalIDs && totalIDs.total}</h3>
    </div>
  </div>
 );
};

export default Summary;