import { NextRequest, NextResponse } from "next/server";
import { genDynInsertQuery, genDynUpdateQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateCreateClient, ValidateUpdateClient } from "@/validate/client.validate";
import { CLIENTS } from "@/types/clients";

/**
 * 
 * route : "/api/admin/clients"
 * description : get clients in admin page
 * method : GET
 * private : true
 * @returns created project
 */
export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    try {
        const query = `
        SELECT * 
        FROM ${DB.CLIENTS_TABLE}
      `;
        const clients: CLIENTS[] = await mysqlQuery({ query });

        return NextResponse.json(
            {
                message: "Clients Retrieved Successfully",
                clients,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error?.message,
                client: [],
            },
            { status: 400 }
        );
    }
}
/**
 * 
 * route : "/api/admin/clients"
 * description : create new client
 * method : POST
 * private : true
 * @returns created client
 */
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let body = await req.json();
        await ValidateCreateClient(body);

        let clients = await mysqlQuery({
            query: `SELECT * FROM ${DB.CLIENTS_TABLE} where LOWER(client_name)=LOWER(?)`,
            values: [body?.client_name]
        })
        if(clients.length!=0)throw new Error("Client Already Exist")
        let query = await genDynInsertQuery(body, DB.CLIENTS_TABLE);
        let values = Object.values(body);

        const results: any = await mysqlQuery({
            query,
            values
        });
        return NextResponse.json(
            {
                message: "Client Created Successfully",
                id: results.insertId,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error?.message }, { status: 400 });
    }
}
