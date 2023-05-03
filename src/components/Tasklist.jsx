import { useSelector } from "react-redux";


function Tasklist() {

    const todolist1=useSelector(state=>state.todo.tasks)
    console.log(todolist1);

    return (
        <>
        {
            todolist1.map((ele,index)=>{
                return (
                    <>
                    <div>{ele[index].task}</div>
                    <div>{ele[index].description}</div>
                    <div>{ele[index].dates}</div>
                    </>
                )
            }
            )
        }
        </>
    )

}
export default Tasklist;