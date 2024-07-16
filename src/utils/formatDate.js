const formatDate = (date) =>{
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth()+1;
    let day = newDate.getDate();
    return String(year).padStart(2,"0")+'-'+String(month).padStart(2,"0")+'-'+String(day).padStart(2,'0'); 
  }
export default formatDate;