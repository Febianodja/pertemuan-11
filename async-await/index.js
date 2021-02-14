const getApiFlag = async () => {
    const api = "https://restcountries.eu/rest/v2/all";
    let response = await fetch(api);
    let result = await response.json();
    result.map(item => {
        let display = document.querySelector('.container');
        let flags = document.createElement('div');
  
        flags.innerHTML = `<img src="${item.flag}"/>
                        <p>${item.name}</p>`
        flags.classList.add("flags");
        display.appendChild(flags)
    })
}
getApiFlag();