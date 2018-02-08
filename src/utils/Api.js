import Axios from "axios";

function getMedia(user) {
  return Axios.get("https://www.instagram.com/tamtamnl/?__a=1")
    .then(data => {
      return data.data.user.media.nodes.filter(node => {
        return node.is_video === false;
      });
    })
    .catch(handleError);
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  media: getMedia
};
