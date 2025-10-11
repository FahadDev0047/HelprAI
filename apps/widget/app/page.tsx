"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {useMutation, useQuery} from "convex/react"
import {api} from "@workspace/backend/_generated/api"



export default function Page() {
  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Widget App</h1>
        {JSON.stringify(users)}
        <Button onClick={()=>addUser()}>Add</Button>

      </div>
    </div>
  )
}
