import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    return user
}