"use client"

import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"
import {useMutation, useQuery,Authenticated,Unauthenticated} from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";
import {api} from "@workspace/backend/_generated/api"



export default function Page() {
  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add)
  return (
    <>
    <Authenticated>
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Web App</h1>
        {JSON.stringify(users)}
        <UserButton/>
        <Button onClick={()=>addUser()}>Add User</Button>
      </div>
    </div>
    </Authenticated>
    <Unauthenticated>
      <p>Must be sign in!</p>
      <SignInButton>Sign In</SignInButton>
    </Unauthenticated>
      
    </>
  )
}
