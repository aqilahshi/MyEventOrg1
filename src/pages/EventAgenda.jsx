// // import React, { Component } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import InputGroup from 'react-bootstrap/InputGroup';
// // import {Link} from 'react-router-dom';


// // class EventAgenda extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>CS Bersamamu Organization Structure</h1>
// //                 <div className='try13'>
// //                 <Form>
                    
// //         <Form.Group className="mb-3">
// //             <Form.Label>Event Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="Assoc. Prof Muhaya binti Samad"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //             <Form.Label>Activity Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //             <Form.Label>Venue Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //             <Form.Label>Equipment Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

       
// //         <Form.Group className="mb-3">
// //             <Form.Label>Officials Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //             <Form.Label>Hospitality Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //             <Form.Label>Merchandising Coordinator</Form.Label>
// //             <InputGroup hasValidation>
// //             <Form.Control
// //               type="text"
// //               placeholder="xxxx"
// //               aria-describedby="inputGroupPrepend"
// //               readonly="readonly"
// //             />
// //             <Form.Control.Feedback type="invalid">
// //               Please enter a proper username.
// //             </Form.Control.Feedback>
// //           </InputGroup>
// //         </Form.Group>
        
// //         <p></p>
// //         <Link to="editorgs"><Button variant="primary" type="submit">
// //             Edit Details
// //         </Button></Link>
// //         </Form>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }

// // export default EventAgenda;


// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { ScheduleComponent, Week, WorkWeek, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// import { scheduleData } from './datasource';
// import { extend } from '@syncfusion/ej2-base';


// function EventAgenda() {
//   const data = extend([], scheduleData, null, true);
//   const eventSettings = { dataSource: data };
//   const workingDays = [1, 3, 5];
//   return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} workDays={workingDays}>
//     <ViewsDirective>
//       <ViewDirective option='Week' />
//       <ViewDirective option='WorkWeek' />
//       <ViewDirective option='TimelineWorkWeek' />
//     </ViewsDirective>
//     <Inject services={[Week, WorkWeek, TimelineViews]} />
//   </ScheduleComponent>);
// }
// ;
// const root = ReactDOM.createRoot(document.getElementById('schedule'));
// root.render(<EventAgenda />);