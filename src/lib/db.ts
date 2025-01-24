"use server";
import { DB } from "@/types/database";
import mysql from "mysql2/promise";

// Create a connection pool to reuse connections
const pool = mysql.createPool({
    host: process.env.NEXT_PUBLIC_MYSQL_HOST,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    user: process.env.NEXT_PUBLIC_MYSQL_USER,
    password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
    waitForConnections: true,
    queueLimit: 0,
});

export async function mysqlQuery({ query, values = [] }: { query: string, values?: any[] }): Promise<any> {
    try {
        console.log(query, values)
        const [results] = await pool.execute(query, values);
        console.log(results)
        return results;
    } catch (error: any) {
        console.error("Database query error:", error.message);
        throw new Error("Failed to execute database query.");
    }
}

export async function genDynInsertQuery(dataObj: any, tableName: DB): Promise<string> {
    const keys: string[] = Object.keys(dataObj);

    const columns: string = keys.join(", ")
    const placeholders: string = keys.map(() => "?").join(", ");

    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders}) `;
    return query
}
export async function genDynUpdateQuery(
    dataObj: any,
    tableName: DB,
    whereClause: Record<string, any>
): Promise<string> {
    // Build the SET clause
    const keys: string[] = Object.keys(dataObj);
    const placeholders: string = keys.map((key) => `${key}=?`).join(", ");

    // Build the WHERE clause
    const whereKeys: string[] = Object.keys(whereClause);
    const wherePlaceholders: string = whereKeys.map((key) => `${key}=?`).join(" AND ");

    if (!wherePlaceholders) {
        throw new Error("Update cannot be done without a specific condition");
    }

    // Combine the query
    const query = `UPDATE ${tableName} SET ${placeholders} WHERE ${wherePlaceholders}`;
    return query;
}
