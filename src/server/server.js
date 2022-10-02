const express = require("express");
const app = express();
const port = 3000;

app.use("/client", express.static(path.join(__dirname, "client")));

import("./Routers", ({ BaseRouter }) => {
  app.use("/", BaseRouter);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;
