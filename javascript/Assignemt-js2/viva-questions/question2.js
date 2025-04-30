const items = [
    { name: "One", process: function() { console.log(`${this.name}`); } },
    { name: "Two", process: function() { console.log(`${this.name}`); } }
  ];
  
  function processObjectsDelayed(objects, delay) {
    objects.forEach(obj => {setTimeout(()=>{obj.process();}, delay);});
  }

  processObjectsDelayed(items, 1000); 