import React from "react";
import Form from "./Form";
import List from "./List";

export default function Grid() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Form handleSubmit={handleSubmit} />
            </div>
            <div>
                <List />
            </div>
        </div>
    );
}
