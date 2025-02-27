import Header from './components/Header/Header';
import MainContant from './components/MainContant/MainContant';
import Footer from './components/Footer/Footer';

function App() {



// ЗАДАНИЕ 1
    /*const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    
    const positive = array.filter((item) => {
        return item >= 0
    }).map(item => {
        return <p>{item}</p>
    })
*/



// ЗАДАНИЕ 2
/*
const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

let messages2 = messages.filter((item) => {
     return item.error === false
})
console.log(messages2)
*/


// ЗАДАНИЕ 3


/*
const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];



let words2 = words.map(word => {
    return word.length < 5 ? '*' : word
})


console.log(words2)
*/


//ЗАДАНИЕ 4 


/*
    const sendMessage = (message) => {
      
      // тут какой-то большой код для отправки сообщения
      
    }
    
    const half = (number) =>  number / 2;
    
    
    const showConsole = () => console.log('Экспо');
    
    
    const concatWords = (first, second) => first + second;
    
*/



// ЗАДАНИЕ 5




function justText() {
   return 'expo';
} 
    
function logging(text) {
    
    console.log(text);

}
    

function add(x,y)  {
    const z = 3;
    return z * x * y;
}
    

function onlyPositive(number) {
      if(number < 0) {
        return false;
      }
    
      return true;
    }




  return (
    <div className="container">
        <p>
            {}
        </p>
        
        
    </div>
  );
}

export default App;


/*         <Header/>
        <MainContant/>
        <Footer/>*/