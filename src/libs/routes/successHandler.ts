export default (msg: String, status: number, data: any) => ({
  Message: msg,
  Success: "Ok",
  Status: status,
  Data: data
});
