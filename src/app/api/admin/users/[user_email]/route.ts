import { NextRequest, NextResponse } from "next/server";
import { genDynUpdateQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateAdminUpdateUser } from "@/validate/auth.validate";
import bcrypt from 'bcrypt'

/**
 * 
 * route : "/api/admin/users/:user_email"
 * description : update the users by admin
 * method : PATCH
 * private : true
 * @returns update users
 */
export async function PATCH(req: NextRequest, { params }: { params: { user_email: string } }) {
    let { user_email } = await params;
    try {
        let users = await mysqlQuery({
            query: `SELECT * FROM ${DB.USERS_TABLE} where user_email=?`,
            values: [user_email]
        })
        if (users.length == 0) throw new Error("No User Exist with the Email " + user_email)
        let body = await req.json();
        await ValidateAdminUpdateUser(body);

        if (body.user_password) {
            let user_password = await bcrypt.hash(body.user_password, 8)
            body.user_password = user_password
        }

        let query = await genDynUpdateQuery(body, DB.USERS_TABLE, { user_email })
        let values = [...Object.values(body), user_email];

        await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "User Updated Successfully",
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}