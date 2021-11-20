function getPassword(min, max)
{
    //Случайные значения
function RandomNumber(min, max) 
{
return min + (Math.random() * (max - min)) | 0;
}

function RandomValue(values)
{
    let index = RandomNumber(0, values.length);
    return values[index];
}
//--------------------------------------------
let string = ''
const numbers = '0123456789';
const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
const largeLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lengthPassword = RandomNumber(6, 20);
//--------------------------------------------
for (let i = 0; i < 3; i++)
{
  let variant = RandomNumber(i, 3);
  switch (variant) 
    {
    case 0:
        string += RandomValue(numbers);
        break;
    case 1:
        string += RandomValue(smallLetters);
        break;
    case 2:
        string += RandomValue(largeLetters);
        break;
    }
}

while (string.length < lengthPassword) 
{
    let variant = RandomNumber(1, 3);
    switch (variant) 
    {
        case 1:
            string += RandomValue(numbers);
            break;
        case 2:
            string += RandomValue(smallLetters);
            break;
        case 3:
            string += RandomValue(largeLetters);
            break;
    }
}

return string;

}

  console.log("8.1 Генератор пароля")
  console.log("Пароль 1:")
  console.log(getPassword())
  console.log("Пароль 2:")
  console.log(getPassword())
  console.log("Пароль 3:")
  console.log(getPassword())
  console.log("Пароль 4:")
  console.log(getPassword())
  console.log("Пароль 5:")
  console.log(getPassword())