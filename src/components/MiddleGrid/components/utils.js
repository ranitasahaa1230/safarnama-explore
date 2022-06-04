export const getDate = (updatedDate) => {
    let date = new Date(updatedDate);
    date = String(date).split(" ");
    return `${date[2]} ${date[1]}, ${date[3]}`;
  };