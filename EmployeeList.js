import { useState } from "react";
import Employee from "./Employee";

function EmployeeList() {

    const [employess, setEmployess] = useState([
        {
            name: " Hamodi Alshaikhli",
            email: " hamodi.alshaikhli@hotmail.com",
            phone: " 0709 22 33 44",
            skills: " Java, Javascript, Security Guard",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
            name: " Erica Sjöbergh",
            email: " erica_cool@gmail.com",
            phone: " 0708 33 44 55",
            skills: " Dancer, cooking, photografy",
            avatar: "https://i.imgur.com/TUhCrsY.png",
        },
        {
            name: " Emma Lanka",
            email: " Emma_awesome@yahoo.se",
            phone: " 0767 66 55 77",
            skills: " Painting, Photografy, Dancer",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
    ]);


    function handleAddEmp() {
        setEmployess((prevState) => {
            return [...prevState,
                {
                name: " Jennifer Lopez",
                email: " JLO@gmail.com",
                phone: " 0792 33 44 55",
                skills: " Dancer, Singer, Model, Actress",
                avatar: "https://i.imgur.com/TUhCrsY.png",
            }]
        })
    }



        return (
            <div>
                <h2>Employeelist</h2>
                <button onClick={handleAddEmp} className="button">Add Employee</button>
                {employess.map((employees) => (
                    <Employee employeesData={employees} />
                ))}
            </div>
        );
    }

    export default EmployeeList;