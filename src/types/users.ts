export type USER_TYPE = "admin" | "manager" | "employee" | "user"
export type USERS = {
    user_id?: number,
    user_name: string,
    user_email: string,
    user_password?: string,
    user_type: USER_TYPE
}