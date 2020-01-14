import { Router } from "express";
const router = Router();

import livingHTML from './livehtml';
router.use(livingHTML);

router.get('/', function (req, res) {
  res.render('index', { title:"POC Scriptless Chat" });
});

router.get('/live', (req, res) => {
  res.render('chat-output');
});

export default router;