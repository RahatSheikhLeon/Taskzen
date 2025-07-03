import { useState } from 'react';
import { loggedInUser } from './utilities'
import { setCategorices } from "./utilities";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export function Taskcategorices() {
    const navigate = useNavigate()
    const [category, setcategory] = useState({
        categoryid: uuidv4(),
        categoryName: ''
    });

    const handleChange = (e) => {
        const { value } = e.target;
        setcategory(prevValue => ({
            ...prevValue,
            categoryName: value, 
            userId: loggedInUser.id,
        }));
    };

    const handleSubmit = () => {
        if(category.categoryName === ''){
            alert("Enter your category type")
            return;
        }

        setCategorices(category)
        navigate('/my-task')
        
        setcategory({
            categoryid: uuidv4(),
            categoryName: ''
        });
    };

    return (
        <div className="section-wrapper task-categories">
            <h2 className="text-color-dark margin-bottom-12">Create Categories</h2>
            <div className="col-50">
                <label>Category Name</label>
                <input
                    type="text"
                    value={category.categoryName}
                    onChange={handleChange}
                    className="form-control margin-bottom-12"
                />

                <button className="btn-1 margin-0 flex align-items-center justify-content-center" onClick={handleSubmit}>
                    Create
                </button>
            </div>
        </div>
    );
}
