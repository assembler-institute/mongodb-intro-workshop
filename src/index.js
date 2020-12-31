const app = require("./server");
const config = require("./config/config");

app.listen(config.app.PORT, () => {
  config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
});
