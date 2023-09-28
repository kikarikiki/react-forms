import React from "react"
import './form.scss'

export default function SignUpForm() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    /**
     * Challenge: Connect the form to local state
     *
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords do not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <div className="wrapper col-6">
            <form className="rounded bg-white shadow p-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
              </div>

              <div className="form-group">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      name="joinedNewsletter"
                      onChange={handleChange}
                      checked={formData.joinedNewsletter}
                  />
                  <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
              <button className="btn btn-primary submit_btn w-100 my-4">
                  Sign up
              </button>
            </form>
        </div>
    )
}
