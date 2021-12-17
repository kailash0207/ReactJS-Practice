import './index.css'

const TodoItem = props => {
  const {deleteTodos, todos} = props
  const {id, title} = todos

  const onDelete = () => {
    deleteTodos(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
