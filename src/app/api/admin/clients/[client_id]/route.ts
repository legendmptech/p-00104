import { NextRequest, NextResponse } from "next/server";
import { genDynUpdateQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateUpdateClient } from "@/validate/client.validate";

/**
 * 
 * route : "/api/admin/clients/:client_id"
 * description : update client by id
 * method : PATCH
 * private : true
 * @returns update client
 */
export async function PATCH(req: NextRequest, { params }: { params: any }) {
    const { client_id } = params;
    try {
        const body = await req.json();
        await ValidateUpdateClient(body);

        const query = await genDynUpdateQuery(body, DB.CLIENTS_TABLE, { client_id })
        const values = [...Object.values(body), client_id];

        await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "Client Updated Successfully",
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}