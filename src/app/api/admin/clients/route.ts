import { NextRequest, NextResponse } from "next/server";
import { genDynInsertQuery, mysqlQuery } from "@/lib/db";
import { DB } from "@/types/database"
import { ValidateCreateClient } from "@/validate/client.validate";
import { CLIENTS } from "@/types/clients";

/**
 * 
 * route : "/api/admin/clients"
 * description : get clients in admin page
 * method : GET
 * private : true
 * @returns created project
 */
export async function GET(): Promise<NextResponse> {
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
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        await ValidateCreateClient(body);

        const clients = await mysqlQuery({
            query: `SELECT * FROM ${DB.CLIENTS_TABLE} where LOWER(client_name)=LOWER(?)`,
            values: [body?.client_name]
        })
        if(clients.length!=0)throw new Error("Client Already Exist")
        const query = await genDynInsertQuery(body, DB.CLIENTS_TABLE);
        const values = Object.values(body);

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
