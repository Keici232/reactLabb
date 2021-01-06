function Employee({ employeesData }) {
    return (
        <div className="EmployeeDiv">
            <img src = {employeesData.avatar} className = "Avatar"></img>
            <div>
                <p>
                    <strong>{employeesData.name}</strong>
                </p>
                <p>
                    <strong>Email:</strong>
                    {employeesData.email}
                </p>
                <p>
                    <strong>phone:</strong>
                    {employeesData.phone}
                </p>
                <p>
                    <strong>skills:</strong>
                    {employeesData.skills}
                </p>

            </div>

        </div>
    );
}

export default Employee;