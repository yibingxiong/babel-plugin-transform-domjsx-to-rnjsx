let a= require("@babel/core").transform("<a>33</a>", {
    plugins: ["@babel/plugin-transform-react-jsx"]
  });

  console.log(a.code);
