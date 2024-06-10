async function fetchDataAndDisplay() {
  try {
    const response = await fetch('./data/batik1.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);

    const batik = data.batik.slice(0, 6);
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'row';

    batik.forEach((gallery) => {
      const listBatik = document.createElement('list-gallery');
      listBatik.batik1 = gallery;

      const colDiv = document.createElement('div');
      colDiv.className = 'col-12 col-sm-6 col-md-4 d-flex justify-content-center pb-5 '; // Updated class for responsive columns
      colDiv.appendChild(listBatik);

      galleryContainer.appendChild(colDiv);
    });

    const galleryBatik = document.querySelector('gallery-batik');
    if (galleryBatik) {
      galleryBatik.appendChild(galleryContainer);
    } else {
      console.error('Element <gallery-batik> not found in the document.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function fetchDataAll() {
  try {
    const response = await fetch('./data/batik.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);

    const batik = data.batik;
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'row';

    batik.forEach((gallery) => {
      const listBatik = document.createElement('list-gallery');
      listBatik.batik1 = gallery;

      const colDiv = document.createElement('div');
      colDiv.className = 'col-12 col-sm-6 col-md-4 d-flex justify-content-center pb-5';
      colDiv.appendChild(listBatik);

      galleryContainer.appendChild(colDiv);
    });

    const galleryBatik = document.querySelector('gallery-batik');
    if (galleryBatik) {
      galleryBatik.appendChild(galleryContainer);
    } else {
      console.error('Element <gallery-batik> not found in the document.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchDataAndDisplay;
export { fetchDataAll };
