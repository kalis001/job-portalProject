import './Home.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from './images.png'

export default function Home() {
    const [open, setopen] = useState('')

    function fixed() {
        setopen('fixed')
    }
    function range() {
        setopen('range')
    }
    function negotiate() {
        setopen("")
    }

    const [joptittle, setjoptittle] = useState('')
    const [Vacancies, setvacancies] = useState(0)
    const [joptype, setjoptype] = useState('')
    const [joptag, setjoptag] = useState('')
    const [category, setcategory] = useState('')
    const [salary, setsalary] = useState(0)
    const [exLevel, setexlevel] = useState('')
    const [Deadline, setdeadline] = useState('')
    const [description, setdescription] = useState('')

    async function post() {
        const data = {
            Joptittle: joptittle,
            Vacancies: Vacancies,
            Joptype: joptype,
            Joptag: joptag,
            Category: category,
            Salary: salary,
            ExperienceLevel: exLevel,
            Deadline: Deadline,
            Description: description
        }

        await axios.post('https://67971e95c2c861de0c6b9177.mockapi.io/Datas', data)
            .then(alert('Application submited'))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className='row rows ' >
                <div className="col-2 d-none d-lg-flex navrow">
                    <button><h1>JOBES</h1></button>
                </div>
                <div className="col-12 col-lg-10">
                    <div className="nav">
                        <div className='nav1st d-none d-lg-flex d-md-flex'>
                            <p>Welcome Our Job Portal!</p>
                            <button>Save Jobs</button>
                        </div>
                        <div className='nav2nd'>
                            <div className='lan'>
                                <img src={img1} alt="" />
                                <p>Language</p>

                            </div>
                            <div className='logo d-none d-lg-flex'>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <hr style={{ padding: '0%', margin: '0%', opacity: '0.1' }} />
                    <div className="row menu">

                        <div className='menui'>
                            <div className='navrow d-lg-none '>
                                <button><h1>JOBES</h1></button>
                            </div>
                            <div className='menuitem d-none d-lg-flex'>
                                <Link>Home <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg></span></Link>
                                <Link>Find Jobs</Link>
                                <Link>Pages <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg></span></Link>
                                <Link>Employers</Link>
                                <Link>Blog</Link>
                                <Link>Contact</Link>
                            </div>

                        </div>
                        <div className='profile'>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg><span>3</span></button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg><span>5</span></button>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                            <span classNameNameName='menubar d-lg-none d-md-flex'><button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg></button></span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="post">
                <h2>Post A Job</h2>
                <div className='homepost'>
                    <p>Home</p>
                    <p classNameNameName='postAjob'><span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg></span>Post A Job</p>
                </div>
            </div>
            <form action="" onSubmit={post} className='has-validation'>
                <div className="sections">
                    <div className="row wholeform" >
                        <h5 style={{ height: '52px' }}>Job Information:</h5>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="formleft">
                                <div className="job">
                                    <p>Job Title*</p>
                                    <div className="input-group jobtitle flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                        </svg></span>
                                        <input type="text" value={joptittle} onChange={(e) => setjoptittle(e.target.value)} placeHolder="Senior UI/UX Engineer" required />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Vacancies*</p>
                                    <div className="input-group jobtitle flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" value={Vacancies} onChange={(e) => setvacancies(e.target.value)} placeholder="07 Person" required />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Job Type*</p>
                                    <div className="input-group jobtitle1 flex-nowrap">

                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <select className='form-select shadow-none' value={joptype} onChange={(e) => setjoptype(e.target.value)} required >
                                            <option>Full time</option>
                                            <option>Part time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Job Tag*</p>
                                    <div className="input-group jobtitle flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" value={joptag} onChange={(e) => setjoptag(e.target.value)} placeHolder="Type Tag and press enter.." required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="formright">
                                <div className="job">
                                    <p>Job Category*</p>
                                    <div className="input-group jobtitle1 flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <select className='form-select shadow-none' value={category} onChange={(e) => setcategory(e.target.value)} required >
                                            <option>UI/UX Designer</option>
                                            <option>Frontend Developer</option>
                                            <option>Notejs Developer</option>
                                            <option>Backend Developer</option>
                                            <option>Reactjs Developer</option>
                                            <option>Angular Developer</option>
                                            <option>Fullstack Developer</option>
                                            <option>Digital marketing</option>
                                            <option>Software Developer</option>
                                            <option>Angular Developer</option>
                                            <option>PHP Developer</option>
                                            <option>Flutter Developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Budget/Salary*</p>
                                    <div className="input-group jobtitle2 flex-nowrap">
                                        <div className="row ms-0">
                                            <div className="form-check col-6 col-lg-4 fixed">
                                                <input onClick={fixed} value={salary} onChange={(e) => setsalary(e.target.value)} class="form-check-input checkone" type="radio" name="flexRadioDefault" id="ratio1" required />
                                                <label htmlFor="ratio1">
                                                    Fixed Salary
                                                </label>
                                            </div>

                                            <div className="form-check col-6 col-lg-4 range">
                                                <input onClick={range} value={salary} onChange={(e) => setsalary(e.target.value)} class="form-check-input" type="radio" name="flexRadioDefault" id="ratio2" required />
                                                <label htmlFor="ratio2">
                                                    Salary Range
                                                </label>
                                            </div>

                                            <div className="form-check col-6 col-lg-4 check">
                                                <input onClick={negotiate} value={salary} onChange={(e) => setsalary(e.target.value)} class="form-check-input" type="radio" name="flexRadioDefault" id="ratio3" required />
                                                <label htmlFor="ratio3">
                                                    Negotiable
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            {
                                                open === "fixed"
                                                    ?
                                                    <div className="input-group salary flex-nowrap">
                                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                                        </svg></span>
                                                        <input type="number" value={salary} onChange={(e) => setsalary(e.target.value)} placeHolder="Salary" required />
                                                    </div>
                                                    :
                                                    open === 'range'
                                                        ?
                                                        <div className="row sr">
                                                            <div className="input-group col-6 minsalary flex-nowrap">
                                                                <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-coin mt-3 ms-1 m-1" viewBox="0 0 16 16">
                                                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                                                </svg></span>
                                                                <input type="number" value={salary} onChange={(e) => setsalary(e.target.value)} placeHolder="Min Salary" required />
                                                            </div>
                                                            <div className="input-group col-6 minsalary flex-nowrap">
                                                                <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-coin mt-3 ms-1 m-1" viewBox="0 0 16 16">
                                                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                                                </svg></span>
                                                                <input type="number" placeHolder="Max Salary" required />
                                                            </div>
                                                        </div>
                                                        :
                                                        <div>

                                                        </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Experience Level*</p>
                                    <div className="input-group jobtitle flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" value={exLevel} onChange={(e) => setexlevel(e.target.value)} placeHolder="Type Experiences" required />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Deadline*</p>
                                    <div className="input-group jobtitle flex-nowrap">
                                        <span classNameName="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" value={Deadline} onChange={(e) => setdeadline(e.target.value)} placeHolder="Type Experiences" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h6 style={{ fontSize: '14px' }}>Job Description*</h6>
                        <div>
                            <textarea className='description' value={description} onChange={(e) => setdescription(e.target.value)} placeholder='Type a message...' rows="10" cols="105" required></textarea>
                        </div>

                        <div className='declaration'>
                            <div className="form-check check1">
                                <input class="form-check-input" type="checkbox" />
                                <label>
                                    Here, I accepted company terms & conditions.
                                </label>
                            </div>
                        </div>
                        <div className="postnow">
                            <button type='submit'>Post Now</button>
                        </div>
                    </div>
                </div>
            </form >
        </div>

    )
}
