"use client";
import React, { useState } from "react";

interface Props {
  children: string;
  className: string;
}
const ExpandableText = ({ children, className }: Props) => {
  let currentText = "";

  const [isExpanded, setExpanded] = useState(false);

  if (children.length > 100 && !isExpanded) {
    currentText = children.substring(0, 100) + "...";
  } else {
    currentText = children;
  }

  return (
    <p
      className={className + " cursor-pointer"}
      onClick={() => setExpanded(!isExpanded)}
    >
      {currentText}
    </p>
  );
};

export default ExpandableText;
