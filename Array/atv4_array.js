const arr = ["placa-mãe", "cpu", "ram", "rom", "fonte"];
{
  arr.splice(1, 1, "processador");
  {
    console.log(arr);
    {
      arr.reverse();
      {
        console.log(arr);
      }
    }
  }
}
