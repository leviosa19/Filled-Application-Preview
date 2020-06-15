class FormInput extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h6 className="text-center">Harmonished Application Form</h6>
                <h2 className="text-center">Application for Schegen Visa</h2>
                <h6 className="text-center">This application form is free</h6>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="surname">Surname</label>
                            <input 
                                name="surname"
                                value={this.props.surname}
                                onChange={this.props.saveData}
                                id="surname" placeholder="Enter Surname"
                            />
						</div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="birthSurname">Surname at birth</label>
                            <input type="text"
                                name="surnameAtBirth"
								value={this.props.surnameAtBirth}
                                onChange={this.props.saveData}
                                className="form-control" id="birthSurname" placeholder="Enter Surname at birth" />
                        </div>
                    </div>
                </div>

                <div className="form-group input-group-sm">
                    <label for="firstName">First Name</label>
					<input type="text"
						value={this.props.firstName}
						onChange={this.props.saveData}
						className="form-control" name="firstName" placeholder="Enter First Name" />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="dob">Date of Birth</label>
							<input type="text"
								value={this.props.dob}
								onChange={this.props.saveData}
								className="form-control" name="dob" placeholder="Enter DOB (Y-M-D)" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="cNationality">Current Nationality</label>
							<input type="text"
								value={this.props.cNationality}
								onChange={this.props.saveData}
								className="form-control" name="cNationality" placeholder="Enter Current Nationality" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="pob">Place of Birth</label>
							<input type="text"
								value={this.props.pob}
								onChange={this.props.saveData}
								className="form-control" name="pob" placeholder="Enter Place of Birth" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="cob">Country of Birth</label>
							<input type="text"
								value={this.props.cob}
								onChange={this.props.saveData}
								className="form-control" name="cob" placeholder="Enter Country of Birth" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        Sex<br />
                        <label>
							<input type="radio" name="gender" value="Male"
								onChange={this.props.saveData} />
                            Male
                        </label>
                        <label>
							<input type="radio" name="gender" value="Female"
								onChange={this.props.saveData} />
                            Female
                        </label>
                    </div>
                    <div className="col-lg-6">
                        <label>Civil Status: </label>
						<select value={this.props.civilstatus} onChange={this.props.saveData} name="civilstatus">
                            <option value="">--- choose Civil Status: ---</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
							<option value="regPartnership">Registered Partner</option>
                            <option value="seperated">Seperated</option>
                            <option value="divorced">Divorced</option>
                            <option value="widow">Widow</option>
                        </select>
                    </div>
                </div>
                
                <br />
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="parentDetail">Details Parental authority/legal guardian</label>
							<input type="text"
								value={this.props.parentDetail}
								onChange={this.props.saveData}
								className="form-control" name="parentDetail" placeholder="Enter Parent's details" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="nationalityno">Nationality Number (if applicable)</label>
							<input type="text"
								value={this.props.nationalityNo}
								onChange={this.props.saveData}
								className="form-control" name="nationalityNo" placeholder="Enter Nationality Number (if applicable)" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="noOfTDoc">Number of travel documents</label>
							<input type="number"
								value={this.props.noOfTDoc}
								onChange={this.props.saveData}
								className="form-control" name="noOfTDoc" min="0" placeholder="Enter Number of travel documents" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="doi">Date of Issue (y-m-d)</label>
							<input type="text"
								value={this.props.doi}
								onChange={this.props.saveData}
								className="form-control" name="doi" placeholder="Enter Date of Issue" /> 
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="validUntil">Valid until</label>
							<input type="text"
								value={this.props.validUntil}
								onChange={this.props.saveData}
								className="form-control" name="validUntil" placeholder="Enter expiry date" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="issueBy">Issued By</label>
							<input type="text"
								value={this.props.issueBy}
								onChange={this.props.saveData}
								className="form-control" name="issueBy" placeholder="Issued by" />
                        </div>
                    </div>
                </div>

                <div className="form-group input-group-sm">
                    <label for="personalData">Personal data of family member</label>
					<input type="text"
						value={this.props.personalData}
						onChange={this.props.saveData}
						className="form-control" name="personalData" placeholder="Enter Personal data of family member" />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Family Relationship: </label>
						<select value={this.props.familyRel} onChange={this.props.saveData} name="familyRel">
                            <option value="">-- Choose Relationship --</option>
                            <option value="spouse">Spouse</option>
                            <option value="child">Child</option>
                            <option value="grandchild">Grandchild</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label>Type of travel document</label>
						<select value={this.props.typeofTDoc} onChange={this.props.saveData} name="typeofTDoc">
                            <option value="">--- Choose travel DOC ---</option>
                            <option value="oPass">Ordinary Passport</option>
                            <option value="dPass">Diplomatic Passport</option>
                            <option value="sPass">Service Passport</option>
                            <option value="offPass">Official Passport</option>
                            <option value="spPass">Special Passport</option>
                            <option value="otherPass">other</option>
                        </select>
                    </div>
                </div>
                
                <br />

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="addr">Home address</label>
							<input type="text"
								value={this.props.addr}
								onChange={this.props.saveData}
								className="form-control" name="addr" placeholder="Enter Home address" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group input-group-sm">
                            <label for="teleno">Telephone Number</label>
							<input type="text"
								value={this.props.teleno}
								onChange={this.props.saveData}
								className="form-control" name="teleno" placeholder="Enter Telephone Number" />
                        </div>
                    </div>
				</div>

				<div className="form-group input-group-sm">
					<label for="emailId">E-mail Id</label>
					<input type="text"
						value={this.props.emailId}
						onChange={this.props.saveData}
						className="form-control" name="emailId" placeholder="Enter E-mail Id" />
				</div>
				
            </div>
        )
    }
}

class FormPreview extends React.Component {
    constructor(props) {
        super(props)
	}
	printOrder = () => {
		const printableElements = document.getElementById('formm').innerHTML;
		const x = document.body.innerHTML;
		document.body.innerHTML = printableElements;
		window.print();
		document.body.innerHTML = x;
	}
    render() {
        const borderBottomStyle = {
            borderBottom: "0.5px solid #000000"
        };

        const borderRightStyle = {
            borderRight: "0.5px solid #000000"
		};
		
		const btnStyle = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			margin: "0 auto",
			marginTop: "50px"
		}
        
        return (
            <div>
				<div id="formm">

				<h6 className="text-center">Harmonished Application Form  </h6>
                <h2 className="text-center">Application for Schegen Visa</h2>
                <h6 className="text-center">This application form is free</h6>

                <small className="l">The family member of EU, EEA or CH citizens shall not fill in the fields no. 21, 22, 30, 31 and 32 (marked with *).</small>
                <br />
                <small className="l">Fields 1-3 shall be filled in the accordance with data in the travel document.</small>

                <div className="form-box">
                    <div className="row">

                        <div className="col-lg-8 first-box">
                            <p className="hr-line">1. Surname(Family Name):  <b>{this.props.surname}</b></p>
							<p className="hr-line">2. Surname at birth(Former Family Name(s)): <b>{this.props.surnameAtBirth}</b></p>
							<p className="hr-line">3. First Name(s)(Givern name(s)): <b>{this.props.firstName}</b></p>

                            <div className="row" style={borderBottomStyle}>
                                <div className="col-lg-4" style={borderRightStyle}>
									<p>4. Date of Birth (day-month-year): <br /> <b>{this.props.dob}</b></p>
                                </div>
                                <div className="col-lg-4" style={borderRightStyle}>
									<p>5. Place of birth: <br /><b>{this.props.pob}</b></p> <br />
									<p>6. Country of birth: <br /> <b>{this.props.cob}</b></p>
                                </div>
                                <div className="col-lg-4">
									<p>7. Current Nationality: <b>{this.props.cNationality}</b></p>
                                </div>
                            </div>

                            <div className="row" style={borderBottomStyle}>
                                <div className="col-lg-4" style={borderRightStyle}>
									<p>8. Sex <br /> <b>{this.props.gender}</b> </p>
                                </div>
                                <div className="col-lg-8">
                                    <p>9. Civil status</p>
                                    <label>
										<input type="checkbox" name="single" value="Single"
											checked={this.props.civilstatus === "single" ? true : false}
										/>
                                        <small>Single</small>
                                    </label>
                                    <label>
										<input type="checkbox" name="married" value="Married"
											checked={this.props.civilstatus === "married" ? true : false}
										/>
                                        <small>Married</small>
                                    </label>
                                    <label>
										<input type="checkbox" name="regPartnership" value="RegisterPartner"
											checked={this.props.civilstatus === "regPartnership" ? true : false}
										/>
                                        <small>Registered Partner</small>
                                    </label>
                                    <label>
										<input type="checkbox" name="seperated" value="Seperated"
											checked={this.props.civilstatus === "seperated" ? true : false}
										/>
                                        <small>Seperated</small>
                                    </label>
                                    <label>
										<input type="checkbox" name="divorced" value="Divorced"
											checked={this.props.civilstatus === "divorced" ? true : false}
										/>
                                        <small>Divorced</small>
                                    </label>
                                    <label>
										<input type="checkbox" name="widow" value="Widow"
											checked={this.props.civilstatus === "widow" ? true : false}
										/>
                                        <small>Widow</small>
                                    </label>
                                </div>
                            </div>

                            <p className="hr-line">
                                10. Parental authority/legal guardian: Surname, first name, address (if different from applicant's),
								telephone no., e-mail address, and nationality: <br /> <b>{this.props.parentDetail}</b>
							</p>

                            <p className="hr-line">
								11. National identity number, where applicable: <b>{this.props.nationalityNo}</b>
							</p>

                            <div className="row" style={borderBottomStyle}>
                                <div className="col-lg-3" style={borderRightStyle}>
									<p>15. Number of travel documents: <b>{this.props.noOfTDoc}</b></p>
                                </div>
                                <div className="col-lg-3" style={borderRightStyle}>
									<p>16. Date of issue: <br /> <b>{this.props.doi}</b></p>
                                </div>
                                <div className="col-lg-3" style={borderRightStyle}>
									<p>17. Valid until: <b>{this.props.validUntil}</b></p>
                                </div>
                                <div className="col-lg-3">
									<p>18. Issued by <u>(Country)</u>: <br /> <b>{this.props.issueBy}</b></p>
                                </div>
                            </div>

                            <p className="hr-line">
								12. Personal data of the family member who is an EU, EEA or CH citizen: <br /> <b>{this.props.personalData}</b>
							</p>

                            <div className="row" style={borderBottomStyle}>
                                <div className="col-lg-6" style={borderRightStyle}>
									<p>Surname: <b>{this.props.surname}</b></p>
                                </div>
                                <div className="col-lg-6">
									<p>First name(s): <b>{this.props.firstName}</b></p>
                                </div>
                            </div>

                            <div className="row" style={borderBottomStyle}>
                                <div className="col-lg-4" style={borderRightStyle}>
									<p>Date of Birth: <b>{this.props.dob}</b></p>
                                </div>
                                <div className="col-lg-4" style={borderRightStyle}>
									<p>Nationality: <b>{this.props.cNationality}</b></p>
                                </div>
                                <div className="col-lg-4">
									<p>Number of travel documents or ID cards: <b>{this.props.noOfTDoc}</b></p>
                                </div>
                            </div>

                            <p>13. Family relationship with EU, EEA or CH citizen</p>
                            <div className="singlebox" style={{ padding: "0 0 0 5px"}}>
                                <label>
									<input type="checkbox" name="spouse" value="spouse"
										checked={this.props.familyRel === "spouse" ? true : false}
									/>
                                    <small>spouse</small>
                                </label>
                                <label>
									<input type="checkbox" name="child" value="child"
										checked={this.props.familyRel === "child" ? true : false}
									/>
                                    <small>child</small>
                                </label>
                                <label>
									<input type="checkbox" name="grandchild" value="grandchild"
										checked={this.props.familyRel === "grandchild" ? true : false}
									/>
                                    <small>grandchild</small>
                                </label>
                                <label>
									<input type="checkbox" name="other" value="other"
										checked={this.props.familyRel === "other" ? true : false}
									/>
                                    <small>other (Please specify): </small>
                                </label>
                            </div>
                            
                            <p className="hr-line"></p>

                            <p>14. Type of travel document</p>
                            <div className="singlebox" style={{ padding: "0 0 0 5px" }}>
                                <label>
									<input type="checkbox" name="oPass" value="oPass"
										checked={this.props.typeofTDoc === "oPass" ? true : false}
									/>
                                    <small>Ordinary passport</small>
                                </label>
                                <label>
									<input type="checkbox" name="dPass" value="dPass"
										checked={this.props.typeofTDoc === "dPass" ? true : false}
									/>
                                    <small>Diplomatioc Passport</small>
                                </label>
                                <label>
									<input type="checkbox" name="sPass" value="sPass"
										checked={this.props.typeofTDoc === "sPass" ? true : false}
									/>
                                    <small>Service Passport</small>
                                </label>
                                <label>
									<input type="checkbox" name="offPass" value="offPass"
										checked={this.props.typeofTDoc === "offPass" ? true : false}
									/>
                                    <small>Official Passport </small>
                                </label>
                                <label>
									<input type="checkbox" name="spPass" value="spPass"
										checked={this.props.typeofTDoc === "spPass" ? true : false}
									/>
                                    <small>Special Passport</small>
                                </label>
                                <label>
									<input type="checkbox" name="otherPass" value="otherPass"
										checked={this.props.typeofTDoc === "otherPass" ? true : false}
									/>
                                    <small>Other travel document (Please specify)</small>
                                </label>
                            </div>
                            
                            <p className="hr-line"></p>

                            <div className="row">
                                <div className="col-lg-8" style={borderRightStyle}>
									<p>19. Applicant's home address and e-mail address:  <br />
										<b>{this.props.addr}</b><br />
										E-mail ID: <b>{this.props.emailId}</b>
									</p>
                                </div>
                                <div className="col-lg-4">
									<p>Telephone number(s): <b>{this.props.teleno}</b></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 second-box">
                            <div>
                                <p className="text-center"><b>FOR OFFICIAL USE ONLY</b></p>
                                <p>Date of application: </p>
                                <p>Visa application number:</p>

                                <small>Application lodged at:</small> <br />
                                <div className="line-ht">
                                    <label>
                                        <input type="checkbox" name="embassy" value="embassy" />
                                        <small>Embassy/consulate </small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="sProvider" value="sProvider" />
                                        <small>Service Provider</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="intermediary" value="intermediary" />
                                        <small>Intermediary</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="border" value="border" />
                                        <small>Border(Name): </small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="other" value="other" />
                                        <small>Other:</small>
                                    </label> <br />
                                </div>

                                <br />

                                <small>File handled by:</small> <br /><br />

                                <small>Supporting documents:</small> <br />
                                <div className="line-ht">
                                    <label>
                                        <input type="checkbox" name="tdoc" value="tdoc" />
                                        <small>Travel Document</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="mos" value="mos" />
                                        <small>Means of subsistence</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="invitation" value="invitation" />
                                        <small>Invitation</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="tmi" value="tmi" />
                                        <small>TMI</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="mot" value="mot" />
                                        <small>Means of Transport</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="other" value="other" />
                                        <small>Other: </small>
                                    </label> <br />
                                </div>

                                <br />

                                <small>Visa decision: </small> <br />
                                <div className="line-ht">
                                    <label>
                                        <input type="checkbox" name="refused" value="refused" />
                                        <small>Refused</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="issued" value="issued" />
                                        <small>Issued: </small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="a" value="a" />
                                        <small>A</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="c" value="c" />
                                        <small>C</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="ltv" value="ltv" />
                                        <small>LTV</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="valid" value="valid" />
                                        <small>Valid: </small>
                                    </label> <br />
                                    <small>From: </small> <br /><br />
                                    <small>Until: </small>
                                </div>

                                <br />

                                <small>Number of entries: </small> <br />
                                <div className="line-ht">
                                    <label>
                                        <input type="checkbox" name="one" value="one" />
                                        <small>1</small>
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name="multiple" value="multiple" />
                                        <small>Multiple:  </small>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
				</div>
				<input type="submit" style={btnStyle} className="btn btn-primary" onClick={() => this.printOrder()} value="Print Form" />

			</div>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)
		this.state = {
			surname: '',
			surnameAtBirth: '',
			firstName: "",
			dob: "",
			cNationality: "",
			pob: "",
			cob: "",
			parentDetail: "",
			nationalityNo: "",
			noOfTDoc: "",
			doi: "",
			validUntil: "",
			issueBy: "",
			personalData: "",
			addr: "",
			emailId: "",
			teleno: "",
			gender: "",
			civilstatus: "",
			familyRel: "",
			typeofTDoc: ""
        }
    }

    saveData = (event) => {
		const { name, value, type, checked } = event.target
		type === "checkbox"
			?
			this.setState({
				[name]: checked
			})
			:
	        this.setState({
    	        [name]: value
        	})
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <FormInput saveData={this.saveData}/>
                    </div>
                    <div className="col-lg-8">
						<FormPreview { ...this.state } />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
