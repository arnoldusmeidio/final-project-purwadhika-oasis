import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllProperties(
    req:Request, 
    res:Response, 
    next:NextFunction) {
    try {
        const { id } = req.params;
    const property = await prisma.property.findMany()

    if (!property) res.status(404).json({ message: "Properties not found" });

    res.status(201).json({ data: property});
    } catch (error) {
        next(error)
    }
}