import joi from "joi"

export const ValidateCreateEmployee = (empData: any) => {
    const Schema = joi.object({
        emp_name: joi.string().required().max(255),
        emp_image: joi.string().required().max(500),
        emp_email: joi.string().email().required().max(100),
        emp_designation: joi.string().required().max(50),
        emp_phone_no: joi.string().length(10),
    })
    return Schema.validateAsync(empData)
}
export const ValidateUpdateEmployee = (empData: any) => {
    const Schema = joi.object({
        emp_name: joi.string().max(255),
        emp_image: joi.string().max(500),
        emp_email: joi.string().email().max(100),
        emp_designation: joi.string().max(50),
        emp_phone_no: joi.string().length(10),
    })
    return Schema.validateAsync(empData)
}
