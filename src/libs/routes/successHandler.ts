export default (msg: string, status: number, data: any) => ({
  Data: data,
  Message: msg,
  Status: status,
  Success: 'Ok',
});
