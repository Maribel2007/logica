const arr = ["amora", "ameixa", "abacate"];
{
  arr.unshift("banana", "bergamota");
  {
    console.log(arr, arr.length);
    {
      console.log(arr.shift(), ",", arr.shift(), ",", arr.shift());
    }
  }
}
