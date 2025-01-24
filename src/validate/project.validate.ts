import joi from "joi"

export const ValidateCreateProject = (projData: any) => {
    const Schema = joi.object({
        project_name: joi.string().max(100).required(),
        project_desc: joi.string().max(1000).required(),
        project_start_date: joi.date().required(),
        project_end_date: joi.date().required(),
        project_type: joi.string().max(100).required(),
        project_place: joi.string().max(100).required(),
        project_image: joi.string().max(500).required(),
        client_id: joi.any().required()
    })
    return Schema.validateAsync(projData)
}
export const ValidateUpdateProject = (projData: any) => {
    const Schema = joi.object({
        project_name: joi.string().max(100),
        project_desc: joi.string().max(1000),
        project_start_date: joi.date(),
        project_end_date: joi.date(),
        project_type: joi.string().max(100),
        project_place: joi.string().max(100),
        project_image: joi.string().max(500),
        client_id: joi.number(),
    })
    return Schema.validateAsync(projData)
}
