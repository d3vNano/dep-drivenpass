import { Credential } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
};

export type CredentialData = Omit<Credential, "id" | "userId" | "createdAt">;