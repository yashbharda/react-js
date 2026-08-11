function StudentCard(props){
    return(
        <div>
            <h2>Student Card</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>City: {props.city}</p>

            <button>View Profile</button>
        </div>
    )
}

export default StudentCard