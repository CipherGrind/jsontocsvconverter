function jsonToCsv(json) {
    const array = typeof json !== "object" ? JSON.parse(json) : json;
    const headers = Object.keys(array[0]);
    const csvLines = [];

    csvLines.push(headers.join(","));

    array.forEach((item) => {
        const line = headers.map((header) => item[header]);
        csvLines.push(line.join(","));
    });

    return csvLines.join("\n");
}

function convertJsonToCsv() {
    const jsonInput = document.getElementById("jsonInput").value;
    const csvOutput = jsonToCsv(JSON.parse(jsonInput));
    document.getElementById("csvOutput").innerText = csvOutput;
}

function copyToClipboard() {
    const csvOutput = document.getElementById("csvOutput");
    const range = document.createRange();
    range.selectNodeContents(csvOutput);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Copied to clipboard');
    } catch (err) {
        alert('Failed to copy');
    }

    selection.removeAllRanges();
}