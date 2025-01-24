import { NextRequest, NextResponse } from "next/server";
import { genDynUpdateQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateAdminUpdateUser } from "@/validate/auth.validate";
import { ValidateUpdateEmployee } from "@/validate/employee.validate";

/**
 * 
 * route : "/api/admin/users/:user_id"
 * description : update the users by admin
 * method : PATCH
 * private : true
 * @returns update users
 */
export async function PATCH(req: NextRequest, { params }: { params: { emp_id: number } }) {
    let { emp_id } = params;
    try {
        let body = await req.json();
        await ValidateUpdateEmployee(body);

        let query = await genDynUpdateQuery(body, DB.EMPLOYEES_TABLE, { emp_id })
        let values = Object.values(body);

        await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "Employee Updated Successfully",
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}