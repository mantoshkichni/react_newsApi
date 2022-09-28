const Card = ({ item, getNews }) => {
  return (
    <div className="cards">
      <button className="btn btn-outline-dark" onClick={() => getNews(item.id)}>
        <img src={item.pic}></img>
      </button>
    </div>
  );
};

export default Card;
