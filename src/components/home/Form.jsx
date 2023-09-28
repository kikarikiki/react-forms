import React from "react"
import './form.scss'


export default function Form() {

    // save state in Object in order to manage multible inputs
    // we will receive ONE setter function to update the correct piece of state in the object
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    // event-> getting access to the properties of THE DOM-Object that we are clicking on
    function handleChange(event) {
        // console.log(event)

        // destructioring the event.target-object & pulling out the values that are needed
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // [name]-> computed properties, short for - event.target.name: event.target.value
                [name]: type === "checkbox" ? checked : value // conditional changes. (Checkbox Values differ to Text Input Values)
            }
        })
    }

    return (
        <form>
            {/* input-field type="text"*/}
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" // 'name' needs to match the exact property name in state, so that we can distinguish between the different input-objects
                value={formData.firstName} // controlled component: value of my forms input equals whatever state is and will be displayed
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            {/* textarea */}
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />

            {/* checkbox: holds bollean values only */}
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly} // value of 'checked' needs to be (or be interpreted) as a bollean
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label> {/* htmlFor: points label to the id="" of the input */}
            <br />
            <br />

            {/* radiobuttons: Mix between Checkbox & Text Inputs */}
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment" // name: all part of the 'employment'-state property
                    value="unemployed" // value that gets saved in state if selected
                    checked={formData.employment === "unemployed"} // controlled component: now react controlls input instead of the input having its own html state
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label> {/* htmlFor: points label to the id="" of the input */}
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment" // name: all part of the 'employment'-state property
                    value="part-time" // value that gets saved in state if selected
                    checked={formData.employment === "part-time"} // controlled component: now react controlls input instead of the input having its own html state
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment" // name: all part of the 'employment'-state property
                    value="full-time" // value that gets saved in state if selected
                    checked={formData.employment === "full-time"} // controlled component: now react controlls input instead of the input having its own html state
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            {/* selectbox / dropdown */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
              id="favColor"
              value={formData.favColor} // mirrors what we have in state
              onChange={handleChange}
              name="favColor"
            >

                <option value="">-- Choose --</option>
                <option value="red">Red</option> {/* value: option to select*/}
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )
}
