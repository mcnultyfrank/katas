// Older Than Me
// Create a method in the Person class which returns how another person's age compares. 
//Given the instances p1, p2 and p3, which will be initialised with the attributes name,
// and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.
// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)

    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
        ageComparision() {
            if (this.age > 26) {
                return (`${this.name} is older than me`)
            } else if (this.age === 26){
                return (`${this.name} is the same age as me`)
            } else {
                return (`${this.name} is younger than me`)
            }
        }
    }
    const samuel  = new Person("Samuel", 24)
    const joel =  new Person("Joel", 36)
    const lily = new Person("Lily", 24)



    console.log(lily.ageComparision());
    

