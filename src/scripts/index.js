// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error)
            resolve();
        else
            reject('error in Rami promise')
    }, 60000)
})

promise1.then(() => document.querySelector('.modal').style.display = 'block');

document.querySelector('.close').addEventListener('click', (e) => document.querySelector('.modal').style.display = 'none');

console.log(promise1);