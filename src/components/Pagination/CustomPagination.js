import Pagination from '@material-ui/lab/Pagination'
const CustomPagination = ({setPage , numOfPages = 10  }) => {
    
    const handlePage = (page) =>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div 
        style = {{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: '10px'

        }}
         >            
            <Pagination
            onChange ={(e) => handlePage(e.target.textContent)}
            count = {numOfPages}
            color = "primary"
             />
        </div>
    )
}

export default CustomPagination;
