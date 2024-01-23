const createApp = require('./app');

const port = process.env.PORT || 3000;

(async() => {
  const app =  await createApp();
app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
})();
