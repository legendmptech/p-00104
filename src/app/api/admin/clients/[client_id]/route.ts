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
export async function PATCH(req: NextRequest, { params }: { params: { client_id: number } }) {
    let { client_id } = await params;
    try {
        let body = await req.json();
        await ValidateUpdateClient(body);

        let query = await genDynUpdateQuery(body, DB.CLIENTS_TABLE, { client_id })
        let values = [...Object.values(body), client_id];

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