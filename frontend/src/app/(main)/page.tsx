import { headers } from "next/headers";
import Link from "next/Link";
import {auth} from "~/lib/auth"
import {redirect} from "next/navigation"
export default async function Page(){
    const session=await auth.api.getSession({
        headers:await headers()
    })
    if(!session) redirect("/auth/sign-in")
    return <p>Logged In</p>
}