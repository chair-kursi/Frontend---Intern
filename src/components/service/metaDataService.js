import axios from "axios"

export const getMetaData = () =>{
    return axios({
        method: 'get',
        url: 'https://api.oplago.com/metaData'
    }); 
}

export const   getHighestDegrees = (response) => {
    let idx=1;
    const options = response.map((degree)=>({
      "label": degree,
      "value": idx++, 
    })); 
    return options;
  }

export const   getCourses = (response) => {
    let idx=1;
    const options = response.map((course)=>({
      "label": course,
      "value": idx++, 
    }))
    return options;
  } 

export const   getSpecializations = (response) => {
    let idx=1;
    const options = response.map((specialization)=>({
      "label": specialization,
      "value": idx++, 
    })); 
    return options;
  }

export const   getColleges = (response) => {
    let idx=1;
    const options = response.map((college)=>({
      "label": college,
      "value": idx++, 
    }));
    return options;
  }

export const   getPassingYear = (response) => {
    let idx=1;
    const options = response.map((passingYear)=>({
      "label": passingYear,
      "value": idx++, 
    })); 
    return options;
  }


  export const getCities=(response)=>{
    let idx=1;
    const options = response.map((city)=>({
      "label": city,
      "value": idx++, 
    })); 
    return options;
  }

  export const getNoticePeriod = (response) =>{
    let idx=1;
    const options = response.map((noticePeriod)=>({
      "label": noticePeriod,
      "value": idx++, 
    })); 
    return options;
  }

  export const getSkills = (response) => {
    let idx=1;
    const options = response.map((skill)=>({
      "label": skill,
      "value": idx++, 
    })); 
    return options;
  }

  export const getWorkingSinceMonths = (response) => {
    let idx=1;
    const options = response.map((month)=>({
      "label": month,
      "value": idx++, 
    })); 
    return options;
  }

  export const getWorkingSinceYears = (response) => {
    let idx=1;
    const options = response.map((year)=>({
      "label": year,
      "value": idx++, 
    })); 
    return options;
  }

  export const getWorkingTill = (response) => {
    let idx=1;
    const options = response.map((year)=>({
      "label": year,
      "value": idx++, 
    })); 
    return options;
  }

  export const getCompanies = (response) => {
    let idx=1;
    const options = response.map((company)=>({
      "label": company,
      "value": idx++, 
    })); 
    return options;
  }

  export const getSalaryInLakhs = (response) => {
    let idx=1;
    const options = response.map((lakh)=>({
      "label": lakh,
      "value": idx++, 
    })); 
    return options;
  }
  export const getSalaryInThousands = (response) => {
    let idx=1;
    const options = response.map((thousand)=>({
      "label": thousand,
      "value": idx++, 
    })); 
    return options;
  }  
  export const getCurrentDesignation = (response) => {
    let idx=1;
    const options = response.map((designation)=>({
      "label": designation,
      "value": idx++, 
    })); 
    return options;
  }