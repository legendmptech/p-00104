export type PROJECTS = {
    project_id?: number,
    project_name: string,
    project_desc: string,
    project_type: string,
    project_start_date: Date,
    project_end_date: Date,
    project_place: string,
    project_image: string,
    client_id: number,
    client_name?: string,
    client_image?: string,
    client_place?: string
}