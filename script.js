document.addEventListener("DOMContentLoaded", async (event) => {
    const title = document.querySelector('#title');

    try {
        const response = await fetch('./content.json');
        const data = await response.json();

        if (data.company) {
            title.textContent = data.company;
        } else {
            console.warn('Company not found in JSON');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        title.textContent = "Error loading title";
    }
});