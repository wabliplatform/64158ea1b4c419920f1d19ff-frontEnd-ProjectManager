let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('i7kgz').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addEmployee' ;}};document.getElementById('i5rng').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addTask' ;}};document.getElementById('itc9y').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("itc9y")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateTask/' + transitionId;}};document.getElementById('ijz2h7').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ijz2h7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateTask/' + transitionId;}};document.getElementById('in5fpv').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("in5fpv")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateTask/' + transitionId;}};window.onload = () => {const filtertodoTasks = {taskStatus: { $eq: "todo"}}; apiTaskApi.getByParamstask( filtertodoTasks, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itrsx").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskName'){
        subDataElements[i].textContent = data[data.length -i -1].taskName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskStatus;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskStatus'){
        subDataElements[i].textContent = data[data.length -i -1].taskStatus;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'taskEmployee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'employeeName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].taskEmployee.employeeName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].taskEmployee._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'taskEmployee']"
          ).getAttribute("id"),
          data[data.length-i-1].taskEmployee
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});const filterprogressTasks = {taskStatus: { $eq: "inprogress"}}; apiTaskApi.getByParamstask( filterprogressTasks, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i2o1dj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskName'){
        subDataElements[i].textContent = data[data.length -i -1].taskName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskStatus;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskStatus'){
        subDataElements[i].textContent = data[data.length -i -1].taskStatus;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'taskEmployee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'employeeName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].taskEmployee.employeeName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].taskEmployee._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'taskEmployee']"
          ).getAttribute("id"),
          data[data.length-i-1].taskEmployee
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});const filterdoneTasks = {taskStatus: { $eq: "done"}}; apiTaskApi.getByParamstask( filterdoneTasks, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iy7kkj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskName'){
        subDataElements[i].textContent = data[data.length -i -1].taskName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskStatus;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskStatus'){
        subDataElements[i].textContent = data[data.length -i -1].taskStatus;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'taskEmployee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'employeeName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].taskEmployee.employeeName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].taskEmployee._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'taskEmployee']"
          ).getAttribute("id"),
          data[data.length-i-1].taskEmployee
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};