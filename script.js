function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = 'your_api_key';
  json(`https://api.ipdata.co?api-key=6fccfff37a2e5803ca7ea3511eba061b48e8fbf9b7169fa17844ec19`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);

    // Start get time
    let current = new Date();

    // Get date and time
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

    // so many more properties
    document.querySelector("#ip").value = data.ip;
    document.querySelector("#city").value = data.city;
    document.querySelector("#country").value = data.country_code;
    document.querySelector("#date").value = cDate;
    document.querySelector("#time").value = cTime;
  });