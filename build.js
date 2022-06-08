import webpack from "webpack";

const config = {
  mode: "production",
  entry: "./app.js",
  module: {
    rules: [
      {
        test: /\.js/,
        use: [{ loader: "./loader.js" }],
      },
    ],
  },
};

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.toString());
  } else {
    console.log(stats.toString({ colors: true }));
  }
});
