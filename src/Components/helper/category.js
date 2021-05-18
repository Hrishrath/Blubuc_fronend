import {Base_Url}  from "../../backend"
import { isAuthenticated } from "./auth";

const auth = isAuthenticated()


export const createCategory = (catData) => {
    return fetch(`${Base_Url}/category/create/${auth.user._id}`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`
            },
            body:JSON.stringify(catData)
        }).then( res => {
            return res.json();
        }).catch(err => console.log("Error: ", err))

}


export const updateCategory = (catData) => {
    return fetch(`${Base_Url}/${catData.id}/${auth.user._id}`,
    {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`
        }
    }).then( res => {
        return res.json();
    }).catch(err => console.log("Error: ", err))
}


export const getCategory = (catData) => {
    return fetch(`${Base_Url}/category/${catData.id}`,
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then( res => {
        return res.json();
    }).catch(err => console.log("Error: ", err))
}


export const getCategories = () => {
    return fetch(`${Base_Url}/category`,
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then( res => {
        return res.json();
    }).catch(err => console.log("Error: ", err))
}


export const deleteCategory = (catData) => {
    return fetch(`${Base_Url}/${catData.id}/${auth.user._id}`,
    {
        method: "DELETE",

    }).then( res => {
        return res.json();
    }).catch(err => console.log("Error: ", err))
}