import { render,screen } from "@testing-library/react"
import Contact from "../Components/About/Contact"
import React from "react";
import "@testing-library/jest-dom"
import "@testing-library/react"
import "babel-jest"

describe("Contact us test case",()=>{
        
test('should have email ', () => {
    render(<Contact/>);
 
    const email=screen.getByText("supriyo2k5@gmail.com");
    expect(email).toBeInTheDocument();
 })
 
 test('should have a rendered 2 link ', () => {
   
     render(<Contact/>)
     const email=screen.getAllByRole("link");
    expect(email.length).toBe(2);
 })
})


