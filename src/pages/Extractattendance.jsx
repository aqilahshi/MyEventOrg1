import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Table, Button } from "react-bootstrap";

function ExtractAttendance() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionRef = collection(db, "Participant");
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const handleDownload = () => {
    const csv = [
      ["Username", "Email", "Matric No", "Phone No", "Year of Study", "School"],
      ...users.map((user) => [
        user.username,
        user.email,
        user.matricno,
        user.phoneno,
        user.yearstudy,
        user.school,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const downloadLink = document.createElement("a");
    const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "attendance.csv";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <blockquote class="blockquote text-center">
          <h1 class="mb=0">Participants' lists</h1>
          <footer>Below is the lists of participants attendance</footer>
      </blockquote>
      <div className="table-responsive" style={{overflow:'scroll', maxHeight:'600px', marginInline:'30px'}}>
        <Table bordered hover striped >
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Matric No</th>
              <th>Phone No</th>
              <th>Year of Study</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.matricno}</td>
                <td>{user.phoneno}</td>
                <td>{user.yearstudy}</td>
                <td>{user.school}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mb-5">
        <Button variant="primary" style={{float: 'right', marginRight:'30px'}} onClick={handleDownload}>
          Download as CSV
        </Button>
      </div>
    </div>
  );
}

export default ExtractAttendance;
