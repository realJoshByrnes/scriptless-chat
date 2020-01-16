import { Router } from "express";
const router = Router();

import Sessions from './sessions';
const sessions = Sessions.getInstance();

import livingHTML from './livehtml';
router.use(livingHTML);

import escape from 'escape-html';

import indexController from './controllers/index'
router.get('/', indexController);
router.post('/', indexController);

router.get('/live/output', (req, res) => {
  const chatSessionId = req.query.chatSessionId;
  res.render('chat-output', { chatSessionId });
});

router.get('/input', (req, res): void => {
  const chatSessionId = req.query.chatSessionId;
  res.render('chat-input', { url: `${req.baseUrl}${req.path}`, chatSessionId });
});

router.post('/input', (req, res): void => {
  const sessionId = (req.signedCookies.chatSessionId) ? req.signedCookies.chatSessionId : req.body.chatSessionId;
  const session = sessions.get(sessionId);
  session.addLine(escape(req.body.data));

  const chatSessionId = req.body.chatSessionId;
  res.render('chat-input', { url: `${req.baseUrl}${req.path}`, chatSessionId });
});

export default router;