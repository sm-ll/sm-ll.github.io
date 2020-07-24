import React from "react"

export default function Layout({ children }) {
  return (
    <div class="wrapper">
      <div class="container">
	      {children}
      </div>
    </div>
  	)
}