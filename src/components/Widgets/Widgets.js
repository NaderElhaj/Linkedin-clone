import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => {
     
    return <div className="widgets__article">
      <div className="widgets__atricleLeft">
          <FiberManualRecordIcon />
      </div>
      <div className="widgets__atricleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
      </div>
    </div>
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
      {newsArticle("Nader Is Practicing Reactjs","Top new -9026 views")}
    </div>
  );
}

export default Widgets;
