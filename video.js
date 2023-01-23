const showVideo = () => {
  let { videoId } = JSON.parse(localStorage.getItem("data"));

  let iframe = document.createElement("iframe");

  iframe.src = `https://www.youtube.com/embed/${videoId}`;

  iframe.width = "100%";
  iframe.height = "100%";

  iframe.allowFullscreen = true;

  const parent = document.getElementById("recmnd");

  parent.append(iframe);
};

window.onload = () => {
  showVideo();
};
