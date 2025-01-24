import joi from "joi"

export const ValidateCreateClient = (clientData: any) => {
    const Schema = joi.object({
        client_name: joi.string().max(100).required(),
        client_place: joi.string().max(100).required(),
        client_image: joi.string().max(500).required(),
    })
    return Schema.validateAsync(clientData)
}
export const ValidateUpdateClient = (clientData: any) => {
    const Schema = joi.object({
        client_name: joi.string().max(100),
        client_place: joi.string().max(100),
        client_image: joi.string().max(500),
    })
    return Schema.validateAsync(clientData)
}
