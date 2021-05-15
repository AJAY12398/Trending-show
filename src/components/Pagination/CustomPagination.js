import Pagination from '@material-ui/lab/Pagination'
const CustomPagination = ({setPage  }) => {
    
    const handlePage = (e) =>{
        setPage(e.target.innerText);
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
            onChange = {handlePage}
            count = {10}
            color = "primary"
             />
        </div>
    )
}

export default CustomPagination;
