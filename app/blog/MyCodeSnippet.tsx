"use client"
import React from 'react';
import { Snippet } from '@geist-ui/core';

const MyCodeSnippet = (props: any) => (
  <Snippet {...props} text={props.text} />
);

export default MyCodeSnippet;





