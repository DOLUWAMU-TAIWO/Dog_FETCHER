const url = 'https://dog.ceo/api/breeds/image/random';
const contentDiv = document.getElementById('content');
const button = document.getElementById('button');
const loader = document.getElementById('loader');

// Function to fetch and display a random dog image
async function getDog() {
    try {
        // Show loader while fetching
        showLoader(true);
        contentDiv.innerHTML = '';  // Clear previous content

        // Fetch dog image
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Create and display the image
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'A cute dog image';
        img.setAttribute('aria-label', 'Dog image');

        contentDiv.appendChild(img);

    } catch (error) {
        console.error('Error fetching dog image:', error);
        contentDiv.innerHTML = `<p class="error">Failed to load dog image. Please try again.</p>`;
    } finally {
        // Hide loader once done
        showLoader(false);
    }
}

// Function to show or hide the loader
function showLoader(isLoading) {
    if (isLoading) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}

// Add event listener to the button
button.addEventListener('click', getDog);

// Fetch initial image on page load
getDog();
