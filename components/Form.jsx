import React from "react";

export default function Form({handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="input1">Input 1</label>
                <input type="text" id="input1" className="block w-full rounded-md" />

                <label htmlFor="input2">Input 2</label>
                <input type="text" id="input2" className="block w-full rounded-md" />

                <label htmlFor="input3">Input 3</label>
                <input type="text" id="input3" className="block w-full rounded-md" />

                <label htmlFor="input4">Input 4</label>
                <input type="text" id="input4" className="block w-full rounded-md" />

                <label htmlFor="input5">Input 5</label>
                <input type="text" id="input5" className="block w-full rounded-md" />
            </div>
        </form>
    );
}
