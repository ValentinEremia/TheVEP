import React, { Component } from "react";

export class Head extends Component {
  render() {
    return (
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Hey! I'm Valentin 👋! A mobile and web developer with a strong focus in front-end and system design." />
        <meta name="theme-color" content="#000" />
        <title>Vali's Blog & Portfolio</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
         
      </head>
    );
  }
}

export default Head;
