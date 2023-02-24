import { Request, Response } from "express";
import httpStatus from "http-status";
import { NetworkData } from "../protocols/index.js";
import { networksService } from "../services/index.js";

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