import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (evt) => {
        evt.preventDefault();

        if(!text || !day){
            alert("Please include a task!");
            return;
        }

        onAdd({ text, day, reminder }); 
        setDay("");
        setText("");
        setReminder(false)
    }

    return (
        <form className="add-form" action="" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="add">Task</label>
                <input 
                    type="text" 
                    name="add" 
                    id="add" 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day &amp; Time</label>
                <input 
                type="text" 
                name="day" 
                id="day" 
                placeholder="Add Day &amp; Time" 
                value={day} 
                onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label htmlFor="reminder">Task</label>
                <input 
                type="checkbox" 
                name="reminder" 
                id="reminder"
                checked={reminder} 
                value={reminder} 
                onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask