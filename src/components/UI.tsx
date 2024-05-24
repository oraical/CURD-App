
import "./Ui.css"
function Ui() {


  return (
    <>
        <div className="wrapp">
            <div className="container center color-change-2x">
                <h1 className="tracking-in-expand-fwd">The CRUD App </h1>
            </div>
            <div className="center">
                <input type="text" name="text" className="" placeholder="Yes!! what you want to add" />
                <input type="time" name="int" className="" required />
            </div>
            <div className="center">
                <button className="button-4 ">ADD Task</button>
            </div>
        </div>
    </>
  )
}

export default Ui;
