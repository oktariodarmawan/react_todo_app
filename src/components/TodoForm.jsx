import React from 'react'

const TodoForm = ({ addTodo }) => {
  

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo()
  }


  return (
    <div style={styles.container}>
      <form
        // Panggil function addTodo ketika form dikirimkan
       onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm