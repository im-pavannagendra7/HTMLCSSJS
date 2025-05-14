 function fetchData ()
 {
     fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((data)=>displayData(data))
        .catch((err)=>console.log(err))
 }
 fetchData()
setInterval(() =>
{
fetchData()
},8000)
 function displayData (joke)
 {
document.getElementById("main").textContent=''
     const setup = document.createElement('h1');
     setup.textContent= joke.setup
     const punchline = document.createElement('h2')
    punchline.textContent = joke.punchline + "😂😁";
   document.getElementById('main').append(setup,punchline)
 }



 
  