// Async example fetch ip data
async function getIpData() {
    const data = await fetch("https://api.ipify.org?format=json"),
        result = await data.json();

    return result;
}

async function TimeData() {
    setInterval(() => {
        console.log("Tick");
    }, 2000);
}

async function example() {
    let out = "";

    out += `<h1>Initial</h1>`;
    const result = await getIpData();

    out += `<h1>My ip: ${result.ip}</h1>`;
    document.getElementById("root").innerHTML = out;

    // Second async
    TimeData();
}

window.addEventListener("load", example);