import React from 'react';
import Collapsible from '../components/Collapsible';
import { RxTriangleDown } from "react-icons/rx";

const MyEvent = () => {
    return (
        <div class="container2">
            <div  class="content">
                <h1>MyEvent page</h1>
                <div class="eventsummary">
                    <div>
                        <Collapsible label={<h3>{<RxTriangleDown/>} Ongoing Event</h3>}>
                            <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p>
                        </Collapsible>

                        <Collapsible label={<h3>{<RxTriangleDown/>} Upcoming Event</h3>}>
                            <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p>
                        </Collapsible>
                        
                        <Collapsible label={<h3>{<RxTriangleDown/>} Past Event</h3>}>
                            <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p>
                        </Collapsible>
                    </div>                    
                </div>
            </div> 
        </div>
    );

    
};

export default MyEvent;

// const [visible, setVisible] = useState(false)
// return (
//   <>
//     <CButton href="#" onClick={(event) => {
//       event.preventDefault()
//       setVisible(!visible)
//     }}>
//       Link
//     </CButton>
//     <CButton onClick={() => setVisible(!visible)}>Button</CButton>
//     <CCollapse visible={visible}>
//       <CCard className="mt-3">
//         <CCardBody>
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
//           squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
//           sapiente ea proident.
//         </CCardBody>
//       </CCard>
//     </CCollapse>
//   </>
// )