

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
];
  
const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
const agents = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];
const createAgent = ()=>{
const nameIndex = Math.floor(Math.random()*names.length);
const name = names[nameIndex];
const jobIndex = Math.floor(Math.random()*occupations.length);
const occupation = occupations[jobIndex];
const price = Math.ceil(Math.random()*50)+50;
const newAgent = {name: name, occupation: occupation, price: price}
agents.push(newAgent)
loadPage() 
}

const button = document.querySelector('#add')
button.addEventListener('click', createAgent);

const loadPage = () =>{
    document.querySelector('#total').textContent = `${agents.length} Freelancers`
    document.querySelector('#average').textContent = ` $${getAverage()}`
    
    const freelancers = document.querySelector('#freelancers')
    freelancers.innerHTML = ''
    agents.forEach(item =>{
        freelancers.innerHTML += `
            <div class='freelancer'>
            <p>${item.name}</p>
            <p>price: ${item.price}</p>
            <p>occupation: ${item.occupation}</p>
            </div>  
            <br>
          `
    })
  }


const getAverage = () =>{
    let sum = 0
    agents.forEach(el => {
        sum += el.price 
    })
    return sum / agents.length
}  


  loadPage()
//  const intervalId = setInterval(createAgent, 3000)
//   setTimeout(()=>{
//     clearInterval(intervalId)
//   },30000) 