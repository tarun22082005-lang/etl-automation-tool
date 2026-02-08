async function runETL() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a CSV file");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const loading = document.getElementById("loading");
    const resultBox = document.getElementById("result");

    loading.classList.remove("hidden");
    resultBox.textContent = "";

    try {
        const response = await fetch("https://etl-automation-tool-7.onrender.com", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        loading.classList.add("hidden");
        resultBox.textContent = JSON.stringify(data, null, 2);
        resultBox.classList.remove("placeholder");

    } catch (err) {
        loading.classList.add("hidden");
        alert("Backend not running");
    }
}

function downloadFile() {
    window.open("http://127.0.0.1:8000/download-cleaned", "_blank");
}

