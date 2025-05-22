import "next-auth";

declare module "next-auth" {
    interface User {
        _id: string;
        username?: string;
        email?: string;
        phone?: string;
        isVerified?: boolean;
    }

    interface Session {
        user: {
            _id?: string;
            username?: string;
            email?: string;
            phone?: string;
            isVerified?: boolean;
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        _id?: string;
        username?: string;
        email?: string;
        phone?: string;
        isVerified?: boolean;
    }
}
