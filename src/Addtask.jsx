import { useNavigate } from "react-router-dom"
export function Addtask() {
    const navigate = useNavigate()
    function goback() {
navigate('/my-task')
    }
    return (
        <>
            <div className="box-shadow section-wrapper">
                <div className="flex justify-between">
                    <div className="col-50 margin-bottom-12">
                        <h4>Categori Name</h4>
                    </div>

                    <button className="go-back-btn" onClick={goback}>Go Back</button>
                </div>
                <form>
                    <div className="flex gap-24">
                        <div className="col-50 margin-bottom-12 ">
                            <label htmlFor="text">Title</label>
                            <input type="text" name="titile" className="form-control" required />
                        </div>
                        <div className="col-50 margin-bottom-12">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" className="form-control" required />
                        </div>
                    </div>
                    <label htmlFor="text">description</label>
                    <textarea type="text" name="description" className="form-control description" required />

                </form>
            </div>
        </>
    )
}