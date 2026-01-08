function App() {
    const users = [
        {
            name: 'ankit',
            age: '14',
            email: 'ani@gmail.com',
            id: '1'
        },
        {
            name: 'anki',
            age: '14',
            email: 'ani@gmail.com',
            id: '2'
        },
        {
            name: 'ant',
            age: '10',
            email: 'ani@gmail.com',
            id: '4'
        },
        {
            name: 'ank',
            age: '14',
            email: 'ani@gmail.com',
            id: '4'
        },
        {
            name: 'kit',
            age: '15',
            email: 'ani@gmail.com',
            id: '5'
        },
    ]
    return (
        <div>
            <h1>Loop in jsx Map function </h1>
            <h3>Dynamic data with loop</h3>
            <table border={"2px"}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>Gmail</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>Dummy data without loop</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>anil@gmail.com</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>anil@gmail.com</td>
                        <td>21</td>
                    </tr><tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>anil@gmail.com</td>
                        <td>21</td>
                    </tr><tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>anil@gmail.com</td>
                        <td>21</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default App;