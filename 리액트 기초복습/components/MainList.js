import "./MainList.css";

const MainList = (props) => {
    return (
        <div className="main_list">
            <ul className="list_items">
                    {props.onUserData.map((user) => (
                        <li key={user.id}>
                           {user.name} - {user.age}살 
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default MainList;