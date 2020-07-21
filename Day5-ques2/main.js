class User {
    constructor(name,age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
    user1() {
      return "I am " + this.name + " my age is " + this.age + " my email id is " +this.email;
    }
  }
  
  class Moderator extends User {
    constructor(name,age,email,Add_coin, remove_coin) {
      super(name,age,email);
      
      
      this.Add_coin = Add_coin;
      this.remove_coin = remove_coin;
    }
    moderator() {
      return this.user1() + ", i can add " + this.Add_coin + " coins and i can remove" + this.remove_coin + " coins";
    }
  }
  
  
  class Admin extends Moderator {
    constructor(name,age,email,Add_coin,remove_coin,Add_course, delete_course) {
      super(name,age,email,Add_coin,remove_coin);
      this.Add_course = Add_course;
      this.delete_course = delete_course;
    }
    admin() {
      return this.moderator() + ", i can  add " + this.Add_course + " course and i can delete " + this.delete_course;
    }
  }
  
  a1 = new User("user",20,"user@gmail.com");
  a2 = new Moderator("Moderator",20,"user@gmail",2000,1000);
  a3 = new Admin("Admin",20,"user@gmail",2000,1000,"javascript","Javascript essential");
  document.getElementById("demo").innerHTML = a1.user1();
  document.getElementById("demo1").innerHTML = a2.moderator();
  document.getElementById("demo2").innerHTML = a3.admin();