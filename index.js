//დავალება 1

let data = [
    {
      name : "nika",
      age : 19,
      year : 1956
    },
    {
      name : "kaxa",
      age : 19,
      year : 1997
    },
    {
      name : "kaxaland",
      age : 22,
      year : 2001
    }
  ]
  
  let datanew = data.map(item => item.year).sort((a, b) => b - a)
  console.log(datanew)
  
  //დავალება 2
  
  const container = document.getElementById("container")
  
  let data2 = [
    {
      name : "nika",
      age : 19,
      year : 1956
    },
    {
      name : "kaxa",
      age : 19,
      year : 1997
    },
    {
      name : "kaxaland",
      age : 22,
      year : 2001
    }
  ]
  
  console.log(data2)
  
  container.innerHTML = data.map(el =>`<h2>${el.name}</h2>`).join("")
  
  //დავალება 3
  
  let datalaptop = [
    {
      name: "acer",
      price: 1450
    },
    {
      name: "lg",
      price: 5000
    },
    {
      name: "hp",
      price: 1299
    },
    {
      name:"canon",
      price: 3478
    }
  ]
  
  let expensive = datalaptop.map(item => item.price).reduce((max,total) => {
    if (max < total) {
      return total;
  }
  return max;
  });
  
  console.log(expensive)
  