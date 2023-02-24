import { Network } from "@prisma/client";

export type NetworkData = Omit<Network, "id" | "userId" | "createdAt">