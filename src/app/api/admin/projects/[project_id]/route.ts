import { NextRequest, NextResponse } from "next/server";
import { genDynUpdateQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateUpdateProject } from "@/validate/project.validate";

/**
 * 
 * route : "/api/admin/projects/:project_id"
 * description : update project by id
 * method : PATCH
 * private : true
 * @returns updated project
 */
export async function PATCH(req: NextRequest, { params }: { params: { project_id: number } }) {
    let { project_id } = params;
    try {
        let body = await req.json();
        await ValidateUpdateProject(body);

        let query = await genDynUpdateQuery(body, DB.PROJECTS_TABLE, { project_id })
        let values = Object.values(body);

        await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "Project Updated Successfully",
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}