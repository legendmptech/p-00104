"use client"
import { CLIENTS } from "@/types/clients";
import { EMPLOYEES } from "@/types/employees";
import { USERS } from "@/types/users";

export async function postAdminClientForm(data: CLIENTS) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/clients`, {
            method: "POST",
            body: JSON.stringify(data),
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        if (!res.ok) {
            throw new Error(json.error);
        }
        return json;
    } catch (error) {
        throw error
    }
}
export async function getAdminClients() {
    try {
        const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/admin/clients`;
        const res = await fetch(
            apiURL
        );
        const data = await res.json();
        if (!res.ok) {
            return []
        } else {
            return data?.clients;
        }
    } catch (e: any) {
        console.log(e)
        return []
    }
}
export async function postAdminProjectForm(data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/projects`, {
            method: "POST",
            body: JSON.stringify(data),
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        if (!res.ok) {
            throw new Error(json.error);
        }
        return json;
    } catch (error) {
        throw error
    }
}
export async function getAdminProjects() {
    try {
        const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/admin/projects`;
        const res = await fetch(
            apiURL
        );
        const data = await res.json();
        if (!res.ok) {
            return []
        } else {
            return data?.projects;
        }
    } catch (e: any) {
        console.log(e)
        return []
    }
}
export async function postAdminEmployeeForm(data: EMPLOYEES) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/employees`, {
            method: "POST",
            body: JSON.stringify(data),
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        if (!res.ok) {
            throw new Error(json.error);
        }
        return json;
    } catch (error) {
        throw error
    }
}
export async function getAdminEmployees() {
    try {
        const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/admin/employees`;
        const res = await fetch(
            apiURL
        );
        const data = await res.json();
        if (!res.ok) {
            return []
        } else {
            return data?.employees;
        }
    } catch (e: any) {
        console.log(e)
        return []
    }
}
export async function postAdminUserForm(data: USERS) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/users`, {
        method: "POST",
        body: JSON.stringify(data),
        keepalive: true,
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await res.json();
    if (res.ok) {
        return json
    }
    throw new Error("Cannot Create User Account")
}
export async function getUsersInAdminPage() {
    try {
        const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/admin/users`;
        const res = await fetch(
            apiURL
        );
        const data = await res.json();
        if (!res.ok) {
            return []
        } else {
            return data?.users;
        }
    } catch (e: any) {
        console.log(e)
        return []
    }
}

// export async function updateQuestionById(data) {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/question`, {
//             method: "PUT",
//             body: JSON.stringify(data),
//             keepalive: true,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         if (!res.ok) {
//             throw new Error("Could not Update Question...");
//         }
//         const json = await res.json();
//         return json;
//     } catch (error) {
//         throw error
//     }
// }
// export async function deleteQuestionById(id) {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_URL}/api/question?questionid=${id}`,
//             {
//                 method: "DELETE",
//                 keepalive: true,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         if (!res.ok) {
//             throw new Error("Could not DELETE question...");
//         }
//         const json = await res.json();
//         return json;
//     } catch (error) {
//         throw error
//     }
// }
// export async function getAllTopicsBySubjectId(subject_id) {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_URL}/api/topic?subject_id=${subject_id}`,
//         {
//             cache: "force-cache",
//             next: {
//                 revalidate: 18000,
//             },
//         }
//     );
//     const topics = await res.json();
//     if (!res.ok) {
//         throw new Error("Could not load page properly");
//     } else {
//         return topics?.topics;
//     }
// }
// export async function getAllQuestionsByTopicId(topic_id) {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_URL}/api/questions?topic_id=${topic_id}`,
//             {
//                 cache: "force-cache",
//                 next: {
//                     revalidate: 18000,
//                 },
//             }
//         );
//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error("Could not load Questions");
//         } else {
//             return data;
//         }
//     } catch (e) {
//         console.log(e)
//         return {
//             error: e.message,
//             questions: []
//         };
//     }
// }

// export async function getQuestionById(id) {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_URL}/api/question?id=${id}`,
//             {
//                 cache: "force-cache",
//                 next: {
//                     revalidate: 18000,
//                 },
//             }
//         );
//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data?.error);
//         } else {
//             return data;
//         }
//     } catch (e) {
//         console.log(e)
//         return {
//             error: e.message,
//             questions: []
//         };
//     }
// }
