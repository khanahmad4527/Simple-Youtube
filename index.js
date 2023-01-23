const searchData = async () => {
  try {
    const API_KEY = "AIzaSyABSOuXoSUUqHhmrpUa5mkIiERroSdhn8o";
    let search_term = document.getElementById("search").value;

    let responce = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${API_KEY}`
    );

    let trashData = await responce.json();
    let data = trashData.items;
    append(data);
  } catch (err) {
    console.log(err);
  }
};

const parent = document.getElementById("card");

const append = (data) => {
  parent.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.textContent = snippet.title;

    let channelName = document.createElement("p");
    channelName.textContent = snippet.channelTitle;

    let channelThumbnail = document.createElement("img");
    channelThumbnail.src = snippet.thumbnails.high.url;

    div.append(channelThumbnail, title, channelName);

    channelThumbnail.addEventListener("click", function () {
      let data = { snippet, videoId };
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "video.html";
    });

    // channelThumbnail.onclick=()=>{

    // }

    parent.append(div);
  });
};

const sort = async () => {
  try {
    const API_KEY = "AIzaSyABSOuXoSUUqHhmrpUa5mkIiERroSdhn8o";
    let search_term = document.getElementById("search").value;
    let sort = "order=relevance";

    let value = document.getElementById("sort").value;
    if (value == "view") {
      sort = "order=viewCount";
    } else if (value == "alphabet") {
      sort = "order=title";
    } else if (value == "rating") {
      sort = "order=rating";
    } else {
      sort = "order=relevance";
    }

    let responce = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&${sort}&maxResults=20&q=${search_term}&key=${API_KEY}`
    );

    let trashData = await responce.json();
    let data = trashData.items;
    append(data);
  } catch (err) {
    console.log(err);
  }
};

//to save quote use this
// let data = JSON.parse(localStorage.getItem("ref"));
// append(data);
