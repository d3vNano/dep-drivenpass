import supertest from 'supertest';
import httpStatus from 'http-status';
import { faker } from "@faker-js/faker";

import app, { init } from "@/app"
import { prisma } from '@/config';
import { factory } from '../factories';
import { cleanDB } from '../helpers';
import { createUser } from '../factories/users-factory';

beforeAll(async () => {
    await init()
    await cleanDB()
})

const server = supertest(app)

describe("POST /signup", () => {
    it("should respond with status 422 when body is not given", async () => {
        const response = await server.post("/signup")

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
    })

    it("should respond with status 422 when body is not valid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

        const response = await server.post("/signup").send(invalidBody);

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    describe("when body is valid", () => {
        const generateValidBody = () => ({
            email: faker.internet.email(),
            password: faker.internet.password(8),
        });

        it("should respond with status 409 when there is an user with given email", async () => {
            const body = generateValidBody();
            await createUser(body);

            const response = await server.post("/signup").send(body);
            expect(response.status).toBe(httpStatus.CONFLICT);
        });

        it("should not return user password on body", async () => {
            const body = generateValidBody();

            const response = await server.post("/signup").send(body);

            expect(response.body).not.toHaveProperty("password");
        });

        it("should respond with status 201 when user is created", async () => {
            const body = generateValidBody();

            const response = await server.post("/signup").send(body);
            expect(response.status).toBe(httpStatus.CREATED);
        });

        // it("should save user on db", async () => {
        //     const body = generateValidBody();

        //     const response = await server.post("/signup").send(body);

        //     const user = await prisma.user.findUnique({
        //         where: { email: body.email },
        //     });
        //     expect(user).toEqual(
        //         expect.objectContaining({
        //             id: response.body.id,
        //             email: body.email,
        //         }),
        //     )
        // })
    })
})