import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'


       
class ValidateVendor extends Component {  
    render() {  
       const data = [{  
        requestdate: 'Virat',
        businessname: 'Ayaan',  
        status: 26 ,
        comment: 37  
          },{  
            requestdate: 'Virat',
            businessname: 'Ahana',  
            status: 22 ,
            comment: 37  
           },{  
           
            requestdate: 'Virat',
            businessname: 'Peter',  
            status: 40 ,
            comment: 37      
           },{  
            requestdate: 'Virat',
            businessname: 'Virat',  
            status: 30 ,
            comment: 37  
           },{  
            requestdate: 'Virat',
            businessname: 'Rohit',  
            status: 32 ,
            comment: 37  
           },{  
            requestdate: 'Virat',
            businessname: 'Dhoni',  
            status: 37,
            comment: 37  
           }]  
       const columns = [{  
         Header: 'Request Date',  
         accessor: 'requestdate'  
         },{  
         Header: 'Business Name',  
         accessor: 'businessname'  
         },{  
        Header: 'Status',  
        accessor: 'status'  
        },{  
        Header: 'Comment',  
        accessor: 'comment'  
        }]  
      return (  
            <div>  
                <ReactTable  
                    data={data}  
                    columns={columns}  
                    defaultPageSize = {5}  
                    pageSizeOptions = {[5, 10, 15, 20]}  
                />  
            </div>        
      )  
    }  
  }  
  export default ValidateVendor; 