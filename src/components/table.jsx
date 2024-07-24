import "../styles/table.css"

const Table = ({children}) =>{
    
    return(<table className="table-container">
        {children}
    </table>);
}

export default Table;