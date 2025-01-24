import { NextRequest, NextResponse } from "next/server";
import { genDynInsertQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateCreateProject } from "@/validate/project.validate";
import { PROJECTS } from "@/types/projects";


/**
 * 
 * route : "/api/admin/projects"
 * description : create new project
 * method : POST
 * private : true
 * @returns created project
 */
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let body = await req.json();
        await ValidateCreateProject(body);

        let projects = await mysqlQuery({
            query: `SELECT * FROM ${DB.PROJECTS_TABLE} where LOWER(project_name)=LOWER(?)`,
            values: [body?.project_name]
        })
        if (projects.length != 0) throw new Error("Project Already Exist")

        let query = await genDynInsertQuery(body, DB.PROJECTS_TABLE);
        let values = Object.values(body);

        const results: any = await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "Project Created Successfully",
                id: results.insertId,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}
/**
 * 
 * route : "/api/admin/projects"
 * description : get projects in the admin 
 * method : GET
 * private : true
 */
export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    try {
        const query = `
        SELECT * 
        FROM ${DB.PROJECTS_TABLE} 
        LEFT JOIN ${DB.CLIENTS_TABLE} 
        ON ${DB.PROJECTS_TABLE}.client_id = ${DB.CLIENTS_TABLE}.client_id
      `;
        const projects: PROJECTS[] = await mysqlQuery({ query });

        return NextResponse.json(
            {
                message: "Projects Retrieved Successfully",
                projects,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error?.message,
                projects: [],
            },
            { status: 400 }
        );
    }
}

