const BasicInformationForm = () => {
    return (
        <div>
            <form>
                <h3>Edit basic information</h3>
                <div>
                    <div>
                        <label htmlFor="FirstName">FirstName</label>
                        <input type="text" name="FirstName" id="FirstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" name="FirstName" id="lastName" />
                    </div>
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email" />
                </div>
                <div>
                    <label htmlFor="tel">Mobile number</label>
                    <input type="tel" name="Email" id="tel" />
                </div>
                <div>
                    <div>
                        <label htmlFor="Select">Gender</label>
                        <select name="select" id="select">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="DOB">Day Of Birth</label>
                        <input type="date" name="DOB" id="DOB" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BasicInformationForm
