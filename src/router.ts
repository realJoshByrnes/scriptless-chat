import { Router } from "express";
const router = Router();

import livingHTML from './livehtml';
router.use(livingHTML);

router.get('/', function (req, res) {
  res.render('index', { title:"POC Scriptless Chat" });
});

router.get('/live/output', (req, res) => {
  res.render('chat-output');
});

router.get('/input', (req, res): void => {
  res.render('chat-input', { url: '/input' });
});

router.post('/input', (req, res): void => {
  // Do something with posted values!
  res.render('chat-input', { url: '/input' });
});

export default router;