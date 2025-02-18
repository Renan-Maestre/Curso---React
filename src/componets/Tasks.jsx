function Tasks(props){
    return(
        <h1>
            {props.tasks.map((tasks) => (
                <p>{task.title}<p/>
                ))}
        <h1/>
    );
        
    
}

export default Tasks;
