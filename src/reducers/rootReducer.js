const defaultDegree = {
    highestQualification: '',
    course: '',
    specialization: '',
    college: '',
    passingYear: ''
}

const initState = {
    user: {
        personal: {
            name: '',
            emailId: '',
            paasword: '',
            mobile: '',
            mobileObject: {
                countryCode: '',
                mobileNumber: ''
            },
            currentCity: '',
            resume: '',
            experience: {
                years: '',
                months: ''
            }
        },
        education: {
            degree: [
                {
                    highestQualification: '',
                    course: '',
                    specialization: '',
                    college: '',
                    passingYear: ''
                }
            ],
            skill: []
        },
        employment: {
            company: [
                {
                    currentDesignation: '',
                    currentCompany: '',
                    currency: '',
                    lac: '',
                    thousand: '',
                    duration: {
                        start: '',
                        end: ''
                    }
                }
            ],
            noticePeriod: ''
        }
    }, 
    header: {
        loggedIn: false,
        newAccount: true,
        showEmployee: false
    },
    fresherSignUp: {
        name: '',
        emailId: '',
        password: '',
        mobile: '',
        currentCity: '',
        activeTab: 0,
        highestQualification: '',
        course: '',
        specialization: '',
        institution: '',
        passingYear: '',
        skills:{}, 
    },
    professionalSignUp: {
        name: '',
        emailId: '',
        password: '',
        mobile: '',
        currentCity: '',
        activeTab: 0,
        highestQualification: '',
        course: '',
        courseType: '',
        specialization: '',
        institution: '',
        passingYear: '',
    },
    workExperience: {
        currentDesignation: '',
        currentOrganisation: '',
        annualSalary: {
            currency: "",
            lakhs: '',
            thousands: ''
        },
        currentCity: '',
        workingSince: {
            year: '',
            month: '',
            present:'',
        },
        noticePeriod: '',
        skills: {},
        companyIndustry: '',
        functionalArea: '',
        role: '',
    },
    employerSignUp: { 
        name:'',
        emailId:'',
        city:'',
        workEmailId:'',
        password:'',
        mobile:'',
        loggedIn:false,
        newAccount:false,
    },
    metaData:[],
    recruiter:false,
    registerationCompleted:false,
    scrollId: ''
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_FRESHER_SIGNUP_DATA') {
        return {
            ...state,
            fresherSignUp: action.fresherSignup
        }
    } 
    if (action.type === 'CHANGE_PROFESSIONAL_SIGNUP_DATA') {
        return {
            ...state,
            professionalSignUp: action.professionalSignUp
        }
    }
    if (action.type === "CHANGE_EMPLOYER_SIGNUP_DATA") {
        return {
            ...state,
            employerSignUp: action.employerSignUp
        }
    }
    if (action.type === "CHANGE_EXPERIENCE_DATA") {
        return {
            ...state,
            workExperience: action.workExperience
        }
    }
    if (action.type === "USER_DID_LOG_IN") {
        return {
            ...state,
            header: action.header
        }
    }
    if(action.type === "STORE_META_DATA")
    {
        return {
            ...state,
            metaData: action.metaData
        }
    }
    if(action.type === "CHANGE_USER_TYPE")
    {
        return {
            ...state,
            recruiter: action.recruiter
        }
    }

    if(action.type === "CHANGE_SCROLL_ID")
    {
        return {
            ...state,
            scrollId: action.scrollId
        }
    }

    return state;
}

export default rootReducer;