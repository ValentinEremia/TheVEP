import PageTitle from "@/components/PageTitle";
import React from "react";

type Props = {};

export default function BlogPage({}: Props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <PageTitle>
      Blog Page - Under Construction{" "}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>
    </div>
  );
}
