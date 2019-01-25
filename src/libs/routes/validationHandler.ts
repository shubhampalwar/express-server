export default config => (req, res, next) => {
  console.log("Inside validation Handler\n");

  const values = Object.keys(config).map(key => config[key]);
  values.forEach(element => {
    const KEYS = Object.keys(element);
    const val = KEYS.map(key => element[key]);
    if (val[0]) {
      const I = KEYS.indexOf("in");
      //const al: string = val[I][0];
      if (val[I][0] == "body") {
        console.log(req.body);
        console.log("\n");
      }
      //console.log(al);
      console.log(KEYS);
      console.log(val);
      next;
    }
  });
  //console.log(values.length);
  //console.log(values[0]);
  //console.log('\n');
  //console.log(values[1].in);
  next();
};
