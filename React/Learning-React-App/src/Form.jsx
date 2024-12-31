function HandleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted")
}
export default function FormSubmit() {
    return (
        <div>
            <form onSubmit={HandleFormSubmit}>
                <input type="text" placeholder="Write something" />
                <button>Submit</button>
            </form>
        </div>
    )
}