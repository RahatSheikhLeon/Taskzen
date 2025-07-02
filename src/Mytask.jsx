import { useNavigate } from "react-router-dom"
export function Mytask({ setDaynamicCategoriId }) {
    const taskCategorices = JSON.parse(localStorage.getItem('categorys'))
    const navigate = useNavigate()
    const selectCategory = (categoryId) => {
        setDaynamicCategoriId(categoryId)
        navigate(`/my-task/${categoryId}/add-task`)
    }
    return (
        <>

            <div className="box-shadow section-wrapper">
                <div className="flex">
                    {taskCategorices.map((item, index) => (
                        <div key={index} className="category-content" onClick={() => selectCategory(item.categoryid)}>
                            <h4>{item.categoryName}</h4>
                        </div>
                    ))}
                </div>

            </div>


        </>

    )
}