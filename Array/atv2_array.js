let arr = [];
{
  arr.push(1, 2, 3, 4, 5);
  {
    console.log(arr, arr.length);
    {
      console.log(arr.pop(), ",", arr.pop(), ",", arr.pop());
    }
  }
}
