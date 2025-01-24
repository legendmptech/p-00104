import { NextRequest, NextResponse } from "next/server";
import { genDynInsertQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateAdminCreateUser } from "@/validate/auth.validate";
import { USERS } from "@/types/users";
import bcrypt from 'bcrypt'


/**
 * 
 * route : "/api/admin/users"
 * description : create new user by admin
 * method : POST
 * private : true
 * @returns created user
 */
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let body = await req.json();
        await ValidateAdminCreateUser(body);

        let users = await mysqlQuery({
            query: `SELECT * FROM ${DB.USERS_TABLE} where user_email=?`,
            values: [body.user_email]
        })
        if (users.length != 0) throw new Error("User already exist")

        let user_password = await bcrypt.hash(body.user_password, 8)
        body.user_password = user_password
        let query = await genDynInsertQuery(body, DB.USERS_TABLE);
        let results = await mysqlQuery({
            query: query,
            values: Object.values(body)
        })
        return NextResponse.json(
            {
                message: "User Created Successfully",
                id: results.insertId,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.log(error)
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
        const query = `SELECT * FROM ${DB.USERS_TABLE}`;
        const users: USERS[] = await mysqlQuery({ query });

        return NextResponse.json(
            {
                message: "Users Retrieved Successfully",
                users,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error?.message,
                users: [],
            },
            { status: 400 }
        );
    }
}

