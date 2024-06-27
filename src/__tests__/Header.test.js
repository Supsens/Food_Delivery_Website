import React from "react";
import "@testing-library/jest-dom"
import "@testing-library/react"
import "babel-jest"
import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Components/Header/Header";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore"
import { BrowserRouter } from "react-router-dom";



test('should load header Component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <Header />
            </Provider>
        </BrowserRouter>

    );

const loginButton=screen.getByRole("button",{name:"Login"});
expect(loginButton).toBeInTheDocument();
});


test('should load header Component with a cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <Header />
            </Provider>
        </BrowserRouter>

    );

const Cart=screen.getByText( "Cart (0)");
expect(Cart).toBeInTheDocument();
});


test('should change login to logout on click of login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <Header />
            </Provider>
        </BrowserRouter>

    );
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});