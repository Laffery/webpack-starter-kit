import { Router } from "express";

const router = Router();

router.use((req, _res, next) => {
  console.log(`[api${req.url}] ${new Date().toISOString()}`);
  next();
});

router
  .get("/echo", async (req, res) => {
    return res.end("hello world");
  })
  .post("/echo", async (req, res) => {
    return res.end(req.body);
  });

export default router;
