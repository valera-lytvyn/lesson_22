function age_user() {
  let current_user_age = prompt("Введіть Ваш вік");
  if (current_user_age <= 0 || current_user_age > 125) {
    alert("так не буває");
  } else if (current_user_age < 12) {
    alert("Вітаю малюк!");
  } else if (current_user_age < 18) {
    alert("Вітаю підліток!");
  } else if (current_user_age < 60) {
    alert("Вітаю дорослий користувач!");
  } else if (current_user_age >= 60) {
    alert("Вітаю Ви певно пенсіонер!");
  }
}

function choose_number() {
  let chooseNumber = +prompt("Виберіть число від 0 до 9");
  if (chooseNumber == 0) {
    alert("спецсимвол цього числа )");
  }
  if (chooseNumber == 1) {
    alert("спецсимвол цього числа !");
  }
  if (chooseNumber == 2) {
    alert("спецсимвол цього числа @");
  }
  if (chooseNumber == 3) {
    alert("спецсимвол цього числа #");
  }
  if (chooseNumber == 4) {
    alert("спецсимвол цього числа $");
  }
  if (chooseNumber == 5) {
    alert("спецсимвол цього числа %");
  }
  if (chooseNumber == 6) {
    alert("спецсимвол цього числа ^");
  }
  if (chooseNumber == 7) {
    alert("спецсимвол цього числа &");
  }
  if (chooseNumber == 8) {
    alert("спецсимвол цього числа *");
  }
  if (chooseNumber == 9) {
    alert("спецсимвол цього числа (");
  }
}

function three_digit_number() {
  let threeDigitNumber = prompt("Введіть трьохзначне число");
  let figure_1 = Math.floor(threeDigitNumber / 100);
  let figure_2 = Math.floor((threeDigitNumber - figure_1 * 100) / 10);
  let figure_3 = threeDigitNumber - Math.floor(threeDigitNumber / 10) * 10;
  if (threeDigitNumber < 100 || threeDigitNumber > 999) {
    alert("Введене число не відповідає заданій умові");
  } else if (figure_1 == figure_2 && figure_1 == figure_3) {
    alert(
      `Ваше число ${threeDigitNumber} містить три одинакові цифри ${figure_1}`
    );
  } else if (figure_1 == figure_2) {
    alert(
      `Ваше число ${threeDigitNumber} містить дві одинакові цифри ${figure_1}`
    );
  } else if (figure_2 == figure_3) {
    alert(
      `Ваше число ${threeDigitNumber} містить дві одинакові цифри ${figure_2}`
    );
  } else if (figure_1 == figure_3) {
    alert(
      `Ваше число ${threeDigitNumber} містить дві одинакові цифри ${figure_3}`
    );
  } else if ((figure_1 == figure_2) == figure_3) {
    alert(
      `Ваше число ${threeDigitNumber} містить три одинакові цифри ${figure_3}`
    );
  } else {
    alert(`Ваше число ${threeDigitNumber} не містить одинакових цифр`);
  }
}

function year() {
  let chooseYear = prompt("Введіть будь-який рік");
  if (chooseYear <= 0) {
    alert("Роки розпочинаються з 1");
  } else if (
    chooseYear % 400 == 0 ||
    (chooseYear % 4 == 0 && chooseYear % 100 > 0)
  ) {
    alert(`Ви ввели ${chooseYear} рік. Він високосний`);
  } else {
    alert(`Ви ввели ${chooseYear} рік. Він не високосний`);
  }
}

function palindrome_number() {
  let palindromeNumber = prompt("Введіть будь-яке п'ятирозрядне число");
  let figure_5 = String(palindromeNumber % 10);
  let figure_4 = String(Math.floor((palindromeNumber % 100) / 10));
  if (palindromeNumber <= 9999 || palindromeNumber > 99999) {
    alert(`Ваше число ${palindromeNumber} не п'ятирозрядне`);
  } else if (Math.floor(palindromeNumber / 1000) == figure_5 + figure_4) {
    alert(`Ваше число ${palindromeNumber} паліндром`);
  } else {
    alert(`Ваше число ${palindromeNumber} не паліндром`);
  }
}

function discount() {
  let discount = prompt("Введіть суму покупки");
  if (discount >= 500) {
    alert(
      `Ваша покупка на суму ${discount}, знижка 7%, зі знижкою складає ${
        discount - discount * 0.07
      }`
    );
  } else if (discount >= 300) {
    alert(
      `Ваша покупка на суму ${discount}, знижка 5%,  зі знижкою складає ${
        discount - discount * 0.05
      }`
    );
  } else if (discount >= 200) {
    alert(
      `Ваша покупка на суму ${discount}, знижка 3%, зі знижкою складає ${
        discount - discount * 0.03
      }`
    );
  } else if (discount < 200) {
    alert(`Ваша покупка на суму ${discount} не передбачає знижки`);
  }
}

function circle() {
  let circleLenght = prompt("Введіть довжину кола");
  let perimeterSquare = prompt("Введіть периметр квадрата");
  if (circleLenght / Math.PI < perimeterSquare / 4) {
    alert(
      `Коло довжиною ${circleLenght} зможе поміститись в квадрат з периметром ${perimeterSquare} `
    );
  } else {
    alert(
      `Коло довжиною ${circleLenght} не зможе поміститись в квадрат з периметром ${perimeterSquare} `
    );
  }
}

function any_date() {
  let anyDay = +prompt("Введіть будь-який день");
  let anyMonth = +prompt("Введіть будь-який місяць");
  let anyYear = +prompt("Введіть будь-який рік");
  if (
    anyMonth <= 0 ||
    anyMonth >= 13 ||
    ((anyMonth == 4 || anyMonth == 6 || anyMonth == 9 || anyMonth == 11) &&
      anyDay > 30) ||
    anyDay <= 0 ||
    anyDay > 31 ||
    anyYear <= 0
  ) {
    alert("День або місяць введені невірно");
  } else if (
    (anyYear % 400 == 0 || (anyYear % 4 == 0 && anyYear % 100 > 0)) &&
    anyMonth == 2 &&
    anyDay == 29
  ) {
    alert(`01.03.${anyYear}`);
  } else if (
    (anyYear % 400 == 0 || (anyYear % 4 == 0 && anyYear % 100 > 0)) &&
    anyMonth == 2 &&
    anyDay == 28
  ) {
    alert(`29.02.${anyYear}`);
  } else if (anyMonth == 2 && anyDay > 28) {
    alert("Забагато днів, як для лютого");
  } else if (anyMonth == 2 && anyDay == 28) {
    alert(`01.${++anyMonth}.${anyYear}`);
    console.log(`01.${++anyMonth}.${anyYear}`);
  } else if (anyMonth == 12 && anyDay == 31) {
    alert(`01.01.${++anyYear}`);
  } else if (
    (anyMonth == 1 ||
      anyMonth == 3 ||
      anyMonth == 5 ||
      anyMonth == 7 ||
      anyMonth == 8 ||
      anyMonth == 10) &&
    anyDay == 31
  ) {
    alert(`01.${++anyMonth}.${anyYear}`);
  } else if (
    (anyMonth == 4 || anyMonth == 6 || anyMonth == 9 || anyMonth == 11) &&
    anyDay == 30
  ) {
    alert(`01.${++anyMonth}.${anyYear}`);
  } else {
    alert(`${++anyDay}.${anyMonth}.${anyYear}`);
    console.log(`${anyDay}.${anyMonth}.${anyYear}`);
  }
}

function currency_converter() {
  let dollarAmount = prompt("Введіть суму в доларах");
  let currency = prompt(
    "Введіть валюту, в яку потрібно перевести, якщо EUR натисніть 1, UAN - 2, AZN - 3 "
  );
  if (currency < 1 || currency > 3) {
    alert(`Конвертер підтримує тільки три валюти EUR - 1, UAN - 2, AZN - 3`);
  } else if (currency == 1) {
    alert(
      `Введена сума ${dollarAmount}$ при конвертаціїї в EUR ,буде рівна ${(
        dollarAmount * 0.98
      ).toFixed(2)} `
    );
  } else if (currency == 2) {
    alert(
      `Введена сума ${dollarAmount}$ при конвертаціїї в UAN ,буде рівна ${(
        dollarAmount * 36.5
      ).toFixed(2)} `
    );
  } else if (currency == 3) {
    alert(
      `Введена сума ${dollarAmount}$ при конвертаціїї в AZN ,буде рівна ${(
        dollarAmount * 1.7
      ).toFixed(2)} `
    );
  }
}

function questions() {
  alert(`За кожну правильну відповідь Вам нарахується 2бали`);
  let question_1 = prompt(
    "Хто розпочав війну 24.02.22? Україна - 1, НАТО - 2, Московщина -3"
  );
  let amountForAnswers = 0;
  if (question_1 == 3) {
    amountForAnswers = amountForAnswers + 2;
    alert("Вірно! 2бали");
  } else {
    alert("Прикро не знати таке...");
  }
  let question_2 = prompt(
    "Хто переможе в цій війні? Україна - 1, НАТО - 2, Московщина -3"
  );
  if (question_2 == 1) {
    amountForAnswers = amountForAnswers + 2;
    alert("Вірно! 2бали");
  } else {
    alert("Прикро не знати таке...");
  }
  let question_3 = prompt("Чий Крим? Білорусь - 1, Україна - 2 Московщина -3");
  if (question_3 == 2) {
    amountForAnswers = amountForAnswers + 2;
    alert("Вірно! 2бали");
  } else {
    alert("Прикро не знати таке...");
  }
  alert(`Сума набраних балів ${amountForAnswers}`);
}

function test() {
  let pass = prompt("Пароль?", "");
}
