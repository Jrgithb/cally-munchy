import "./Eform.css"

const Eform = () =>{
    return(
        <div className="email-bar">
            <form>
            <input type="email" name="email" class="email-input" placeholder="Enter your email" required />
            <button type="submit" class="submit-btn">submit</button>

            </form>
        </div>

    )
};

export default Eform;