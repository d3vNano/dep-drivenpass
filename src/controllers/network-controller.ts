import { Request, Response } from "express";
import httpStatus from "http-status";
import { NetworkData } from "@/protocols";
import { networksService } from "@/services";

export async function createNetwork(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)
    const network: NetworkData = req.body

    await networksService.createNetwork(network, userId)

    res.status(httpStatus.CREATED).send("Successfully created this network")
}

export async function listUserNetworks(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)

    const networks = await networksService.listUserNetworks(userId)

    res.status(httpStatus.OK).send(networks)
}

export async function listUserNetworksById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)
    const networkId: number = Number(req.params.id)

    const network = await networksService.listUserNetworksById(networkId, userId)

    res.status(httpStatus.OK).send(network)
}

export async function deleteNetwork(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)
    const networkId: number = Number(req.params.id)

    await networksService.deleteNetwork(userId, networkId)
    res.status(httpStatus.OK).send("SUCCESSFULLY DELETED")
}