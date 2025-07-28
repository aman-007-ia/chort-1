export function Todos({todos}){
    return<>
        {todos.map((todo) => (
            <div key={todo._id} >
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <button>{todo.completed ? 'Completed' : 'mark as complete'}</button>
            </div>
        ))}
    </>
}