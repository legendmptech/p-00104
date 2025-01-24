import joi from "joi";

let strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export const ValidateSignUp = (authData: any) => {
    const Schema = joi.object({
        user_name: joi.string().max(100).required(),
        user_email: joi.string().email().required(),
        user_password: joi
            .string()
            .pattern(strongPasswordRegex)
            .required()
            .messages({
                "string.pattern.base":
                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
            })
    });

    return Schema.validateAsync(authData);
};
export const ValidateAdminCreateUser = (authData: any) => {
    const Schema = joi.object({
        user_name: joi.string().max(100).required(),
        user_email: joi.string().email().required(),
        user_password: joi
            .string()
            .pattern(strongPasswordRegex)
            .required()
            .messages({
                "string.pattern.base":
                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
            }),
        user_type: joi
            .string()
            .required()
            .valid("admin", "manager", "employee", "user"),
    });

    return Schema.validateAsync(authData);
};
export const ValidateAdminUpdateUser = (authData: any) => {
    const Schema = joi.object({
        user_name: joi.string().max(100),
        user_email: joi.string().email(),
        user_password: joi
            .string()
            .pattern(strongPasswordRegex)
            .messages({
                "string.pattern.base":
                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
            }),
        user_type: joi
            .string()
            .valid("admin", "manager", "employee", "user"),
    });

    return Schema.validateAsync(authData);
};
export const ValidateSignIn = (authData: any) => {
    const Schema = joi.object({
        user_email: joi.string().email().required(),
        user_password: joi
            .string()
            .pattern(strongPasswordRegex)
            .required()
            .messages({
                "string.pattern.base":
                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
            }),
    })
    return Schema.validateAsync(authData)
}
