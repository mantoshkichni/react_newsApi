import React, { useState } from "react";
import ReactModal from "react-modal";

export const CardNews = ({ item }) => {
  const [popup, setpopup] = useState([]);
  const [showpopup, setshowpopup] = useState(false);
  const getdata = (data) => {
    setpopup([data]);
    setshowpopup(!showpopup);
  };
  const closemodel = () => {
    setshowpopup(!showpopup);
  };

  return (
    <>
      <div class="card ml-5 col col-4" style={{ width: "15rem" }}>
        <img
          class="card-img-top img"
          src={item.urlToImage}
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">{item.title}</p>
          <button
            class="btn read_more btn-primary"
            onClick={() => getdata(item)}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="pop-up-container">
        <div className="pop-up-content">
          {popup.map((item) => {
            return (
              <ReactModal
                isOpen={showpopup}
                onRequestClose={closemodel}
                className="Modal"
                overlayClassName="Overlay"
              >
                <>
                  <button
                    className="btn btn-danger"
                    onClick={(showpopup) => setshowpopup(!showpopup)}
                  >
                    X
                  </button>
                  <div className="content">
                    <div className="image">
                      <img src={item.urlToImage}></img>
                    </div>
                    <div className="text_div">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              </ReactModal>
            );
          })}
        </div>
      </div>
    </>
  );
};
