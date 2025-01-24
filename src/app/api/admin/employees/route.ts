import { NextRequest, NextResponse } from "next/server";
import { genDynInsertQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateCreateEmployee } from "@/validate/employee.validate";
import { USERS } from "@/types/users";
import bcrypt from 'bcrypt'
import { EMPLOYEES } from "@/types/employees";


/**
 * 
 * route : "/api/admin/employees"
 * description : create new employee by admin
 * method : POST
 * private : true
 * @returns created employee
 */
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let body = await req.json();
        await ValidateCreateEmployee(body);

        let employees = await mysqlQuery({
            query: `SELECT * FROM ${DB.EMPLOYEES_TABLE} where emp_email=?`,
            values: [body.emp_email]
        })
        if (employees.length != 0) throw new Error("Employee already exist")

        let query = await genDynInsertQuery(body, DB.EMPLOYEES_TABLE);
        let results = await mysqlQuery({
            query: query,
            values: Object.values(body)
        })
        return NextResponse.json(
            {
                message: "Employee Created Successfully",
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
 * route : "/api/admin/users"
 * description : get all the users in admin page
 * method : GET
 * private : true
 * @returns created project
 */
export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    try {
        const query = `SELECT * FROM ${DB.EMPLOYEES_TABLE}`;
        const employees: EMPLOYEES[] = await mysqlQuery({ query });

        return NextResponse.json(
            {
                message: "Employees Retrieved Successfully",
                employees,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error?.message,
                employees: [],
            },
            { status: 400 }
        );
    }
}

