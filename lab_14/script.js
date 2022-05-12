//zavd 1
function calcRectangleArea(width, height) {
    try {
      if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Неправильний тип даних');
      }
    return width * height;
    } catch (e) {
      return e.message;
    }
  }
  console.log(calcRectangleArea(7, true));
  
  //zavd 2
  function checkAge() {
    let age = prompt('Введіть ваш вік');
    if (age==='') {
      throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(age)) {
      throw new Error('Incorrect data type');
    } else if (age<14){
      throw new Error('You are too young');
    }
    alert('Ви можете переглянути фільм!');
  }
  
  try {
    checkAge();
  } catch (e) {
    alert(e.message);
  }
  
  //zavd 3
  function showUser(id) {
    if (id <= 0) {
      throw new Error('id відємний');
    }
    console.log({id: id});
  }
  
  function showUsers(ids) {
    let userIds=[];
    for (const id of ids) {
      try {
        showUser(id);
        userIds.push(id);
      } catch (e) {
        console.log(e.message);
      }
    }
    return userIds;
  }
  
  try {
    showUser(-6);
  } catch (e) {
    console.log(e.message);
  }
  
  showUsers([7, -12, 44, 22]);
  
  //zavd 4
  class MonthException{
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  function getMonthName(month) {
    switch (month) {
      case 1:
        return 'Січень';
      case 2:
        return 'Лютий';
      case 3:
        return 'Березень';
      case 4:
        return 'Квітень';
      case 5:
        return 'Травень';
      case 6:
        return 'Червень';
      case 7:
        return 'Липень';
      case 8:
        return 'Серпень';
      case 9:
        return 'Вересень';
      case 10:
        return 'Жовтень';
      case 11:
        return 'Листопад';
      case 12:
        return 'Грудень';
      default:
        throw new MonthException('Неправильний номер місяця');
    }
  }
  
  try {
    console.log(getMonthName(8));
    console.log(getMonthName(13));
  } catch (e) {
    console.log({name: e.name, message: e.message});
  }