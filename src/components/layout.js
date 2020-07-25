import React from "react"

export default function Layout({ children }) {
  return (
    <div class="wrapper">
      <div class="container">
	      {children}
      </div>
  		<footer>
			  <nav>
			    <ul>
			      <li>london.{new Date().getFullYear()}</li>
			    </ul>
			  </nav>
			</footer>
    </div>
  	)
}