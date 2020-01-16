import { Request, Response } from 'express';
import Sessions from '../sessions';
const sessions = Sessions.getInstance();

export default (req: Request, res: Response): void => {
  const { url } = req
  const { baseUrl } = req;
  const testCookieUrl = `${baseUrl}?`

  // NOTE: We could potentially save the user a bounce if they HAVE cookies set
  // and they're calling '/', but the cookie isn't valid - we know they have
  // cookies enabled, so we could always redirect to baseUrl instead of
  // testCookieUrl. ~JD 17/01/2020
  // (NOT IMPLEMENTED)

  if (url === '/') {
    if (sessions.has(req.signedCookies.chatSessionId)) {
      const sessionId = req.signedCookies.chatSessionId;
      const session = sessions.get(sessionId);
      session.hasCookie = true;
      res.render('index', { title:"Scriptless Webchat", hasCookie: true });
    }
    else if (sessions.has(req.body.chatSessionId)) { // and is valid
      const sessionId = req.body.chatSessionId;
      const session = sessions.get(sessionId);
      session.hasCookie = false;
      res.render('index', { title:"Scriptless Webchat", hasCookie: false, chatSessionId: sessionId });
    }
    else { // Set cookie and test if enabled
      res.cookie('chatSessionId', sessions.create(), { maxAge: 31556952000, signed: true }); // 1 year
      res.redirect(testCookieUrl);
    }
  }
  else if (url === '/?') { // Cookie tester URL
    if (req.signedCookies.chatSessionId) { // Cookies enabled
      return res.redirect(baseUrl);
    }
    res.render('cookies-disabled', { chatSessionId: sessions.create(), baseUrl: req.baseUrl });
  }
  else {
    // Not currently supported (will be in the future)
    res.redirect(baseUrl);
  }
}