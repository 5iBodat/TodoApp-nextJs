import { useEffect, useState } from 'react'
import Layout from '../components/layouts/layout'

interface todosinterface {
    id: number
    text: string
    done: boolean
}
const TodoApp = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([] as todosinterface[])



    const addTodo = () => {
        if (todo) {
            setTodos(
                [
                    {
                        id: todos.length + 1,
                        text: todo,
                        done: false,
                    },
                    ...todos
                ]
            )
            setTodo('')
            // localStorage.setItem('todos', JSON.stringify(todos))
        }
    }

    const removeTodo = (id: number) => {
        console.log(id);
        setTodos(todos.filter((todo) => todo.id !== id))
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const updateTodo = (id: number, done: boolean) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: done,
                    }
                }
                return todo
            })
        )
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    useEffect(
        () => {
            const todos = JSON.parse(localStorage.getItem('todos') || '[]') as todosinterface[]
            setTodos(todos)
        }
        , [])

    useEffect(() => {
        console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    })
    return (
        <>
            <Layout>
                <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
                    <div className="mb-4">
                        <h1 className="text-grey-darkest text-5xl">My Todo App</h1>
                        <h5 className="text-grey-darker text-sm mt-4">Create by : Sahat Parluhutan Lumban Batu</h5>
                        <div className="flex mt-4">
                            <input type="text" placeholder="Add Todo"
                                value={todo}
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                onChange={(event) => {
                                    setTodo(event.target.value)
                                }} />
                            <button onClick={addTodo} className="flex-no-shrink p-2 border-2 rounded text-green-600 border-teal-600 hover:text-white hover:bg-teal-600">Add Todo</button>
                        </div>
                    </div>
                    <div>
                        {todos.map((todo) => (
                            <div className="flex mb-4 items-center" key={todo.id}>
                                {todo.done ? (
                                    <>
                                        <p className="w-full line-through text-green-600 ">{todo.text}</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="w-full text-grey-darkest">{todo.text}</p>
                                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
                                            onClick={() => updateTodo(todo.id, true)}>Done</button>
                                    </>
                                )}
                                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
                                    onClick={() => removeTodo(todo.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TodoApp;