const { Router } = require("express");

const BaseRouter = Router();

const RenderApp = ({ path, comp: C }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat app</title>
    </head>
    <body>
       <div id="app">${renderToString(
         <Suspense fallback={<>Page is Loading...</>}>
           <StaticRouter location={path}>
             <C />
           </StaticRouter>
         </Suspense>
       )}</div>
       <script src="/client/bundle.js"></script>
    </body>
    </html>
    `;
};

import("./routes").then(({ AppRoutes }) => {
  AppRoutes.forEach((route) => {
    const { path, comp: C } = route;
    BaseRouter.get(path, (req, res) => {
      renderToPipeableStream(<>App is Loading ...</>, {
        onAllReady() {
          res.statusCode = 200;
          res.send(RenderApp(route));
        },
      });
    });
  });
});

export default BaseRouter;
