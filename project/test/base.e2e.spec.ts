import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import createTestApp from './createTestApp';

describe('BASE (e2e) TEST', () => {
  let testApp: INestApplication;

  beforeAll(async () => {
    const { app } = await createTestApp({
      additionalModules: [],
    });
    testApp = app;
  });

  afterAll(async () => {
    await testApp.close();
  });

  it('/ (POST).', async () => {
    const response = await request(testApp.getHttpServer())
      .post('')
      .send()
      .expect(201);

    expect(response).toBe(null);
  });
});
