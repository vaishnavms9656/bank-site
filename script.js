
// Username
const user=JSON.parse(localStorage.getItem('Username'))
document.getElementById('heading').innerHTML=`HI ${user}`
// Register Account
function registerAcc() {
  accno = accno.value;
  username = username.value;
  pswd = pswd.value;
  const accountDetails = {
    accno,
    username,
    pswd,
    balance: 0,
  };
  if (accno == "" || username == "" || pswd == "") {
    alert("Please fill all the Data");
  } else {
    if (accno in localStorage) {
      alert("Account Already Exists");
    } else {
      localStorage.setItem(accno, JSON.stringify(accountDetails));
      localStorage.setItem('Username',JSON.stringify(accountDetails.username))
      alert("Account Created Successfully");
      window.location = "./login.html";
    }
  }
}
//Login Acc
function loginAcc() {
  accno = login_accno.value;
  pswd = login_pswd.value;
  if (accno == "" || pswd == "") {
    alert("Please Fill All Data");
  } else {
    if (accno in localStorage) {
      let Acc = JSON.parse(localStorage.getItem(accno));
      if (pswd == Acc.pswd) {
        window.location = "./home.html";
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("Incorrect Account Number");
    }
  }
}
//Deposit
function deposit() {
  amount = deposit_amt.value;
  amount = Math.floor(amount);
  pswd = deposit_pswd.value;
  let Acc = JSON.parse(localStorage.getItem(pswd));
  if (amount == "" || pswd == "") {
    alert("Please Fill All Data");
  } else {
    if (pswd in localStorage) {
      if (pswd == Acc.pswd) {
        Acc.balance += amount;
        deposit_balance.innerHTML = `<p class="text-success ">Deposit Successful , <span class="text-primary">Current Balance Is : ₹${Acc.balance}</span></p>`;
        localStorage.setItem(Acc.pswd, JSON.stringify(Acc));
        document.getElementById("deposit-form").reset();
      }
    } else {
      alert("Incorrect Password");
      document.getElementById("deposit-form").reset();
    }
  }
}
//Withdraw
function withdraw() {
  amount = withdraw_amt.value;
  amount = Math.floor(amount);
  pswd = withdraw_pswd.value;
  if (amount == "" || pswd == "") {
    alert("Please Fill All Data");
  } else {
    if (pswd in localStorage) {
      let Acc = JSON.parse(localStorage.getItem(pswd));
      if (pswd == Acc.pswd) {
        if (Acc.balance > amount) {
          Acc.balance -= amount;
          withdraw_balance.innerHTML = `<p class="text-success mx-5 mt-3">Withdraw Successfull ,<span class="text-primary"> Current Balance Is : ₹ ${Acc.balance}</span></p>`;
          localStorage.setItem(Acc.pswd, JSON.stringify(Acc));
          document.getElementById("withdraw-form").reset();
        } else {
          withdraw_balance.innerHTML = `<p class="text-danger mx-5 mt-3">Cannot Withdraw Insufficient Balance <span class="text-primary"> <br> Available balance is Rs: ₹ ${Acc.balance}</span></p>`;
        }
      }
    } else {
      alert("Incorrect Password");
      document.getElementById("withdraw-form").reset();
    }
  }
}
function logout(){
  window.location='./main.html'
}