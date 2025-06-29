import { useState } from 'react';

export function Taskcategorices() {
    const [category, setcategory] = useState({
        categoryid: Date.now(),
        categoryName: ''
    });

    const handleChange = (e) => {
        const { value } = e.target;
        setcategory(prevValue => ({
            ...prevValue,
            categoryName: value
        }));
    };

    const handleSubmit = () => {
        console.log(category);

        // Reset input field
        setcategory({
            categoryid: Date.now(), // regenerate ID if needed
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
                <button
                    className="btn-1 margin-0 flex align-items-center justify-content-center"
                    onClick={handleSubmit}
                >
                    Create
                </button>
            </div>
        </div>
    );
}
