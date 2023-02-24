import { Credential, Network } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
};

export type CredentialData = Omit<Credential, "id" | "userId" | "createdAt">;

export type NetworkData = Omit<Network, "id" | "userId" | "createdAt">