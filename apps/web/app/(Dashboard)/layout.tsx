import React from "react";
import { AuthGuard } from "../Modules/Auth/ui/components/auth-guard";
import { OrganizationGuard } from "../Modules/Auth/ui/components/organization-guard"

const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <AuthGuard>
            <OrganizationGuard>
            {children}
            </OrganizationGuard>
        </AuthGuard>
     );
}
 
export default Layout;