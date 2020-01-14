import { Router } from "express";
const router = Router();

import livingHTML from './livehtml';
router.use(livingHTML);

router.get('/', function (req, res) {
  res.render('index', {}, (err: Error, html: string): void => {
    res.send(html ?? err);
  });
});

export default router;